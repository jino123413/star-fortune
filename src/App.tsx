import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleAdMob, generateHapticFeedback } from '@apps-in-toss/web-framework';
import { Screen, FortuneResult, StreakData } from './types';
import { getZodiacFortune } from './utils/fortune-engine';
import { getStreakData, updateStreak, getLastSignId, saveLastSignId } from './utils/storage';
import { DeviceViewport } from './components/DeviceViewport';
import ZodiacSelector from './components/ZodiacSelector';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

const AD_GROUP_ID = 'ait.v2.live.c1b1d9cdbb974e27';

function useInterstitialAd(adGroupId: string = AD_GROUP_ID) {
  const [loading, setLoading] = useState(true);
  const [adSupported, setAdSupported] = useState(true);
  const dismissCallbackRef = useRef<(() => void) | undefined>();

  useEffect(() => {
    try {
      const isAdUnsupported = GoogleAdMob?.loadAppsInTossAdMob?.isSupported?.() === false;
      if (isAdUnsupported) {
        setAdSupported(false);
        setLoading(false);
        return;
      }

      setLoading(true);
      const cleanup = GoogleAdMob.loadAppsInTossAdMob({
        options: { adGroupId },
        onEvent: (event: any) => {
          if (event.type === 'loaded') {
            setLoading(false);
          }
        },
        onError: () => {
          setLoading(false);
        },
      });
      return cleanup;
    } catch {
      setAdSupported(false);
      setLoading(false);
    }
  }, [adGroupId]);

  const reloadAd = useCallback(() => {
    if (!adSupported) return;
    setLoading(true);
    GoogleAdMob.loadAppsInTossAdMob({
      options: { adGroupId },
      onEvent: (event: any) => {
        if (event.type === 'loaded') {
          setLoading(false);
        }
      },
      onError: () => {
        setLoading(false);
      },
    });
  }, [adSupported, adGroupId]);

  const showInterstitialAd = useCallback(({ onDismiss }: { onDismiss?: () => void }) => {
    try {
      const isAdUnsupported = GoogleAdMob?.showAppsInTossAdMob?.isSupported?.() === false;
      if (isAdUnsupported) throw new Error('unsupported');
    } catch {
      onDismiss?.();
      return;
    }

    if (!adSupported || loading) {
      onDismiss?.();
      return;
    }

    dismissCallbackRef.current = onDismiss;

    GoogleAdMob.showAppsInTossAdMob({
      options: { adGroupId },
      onEvent: (event: any) => {
        switch (event.type) {
          case 'requested':
            setLoading(true);
            break;
          case 'dismissed':
            dismissCallbackRef.current?.();
            dismissCallbackRef.current = undefined;
            reloadAd();
            break;
          case 'failedToShow':
            dismissCallbackRef.current?.();
            dismissCallbackRef.current = undefined;
            break;
        }
      },
      onError: () => {
        dismissCallbackRef.current?.();
        dismissCallbackRef.current = undefined;
      },
    });
  }, [loading, adSupported, adGroupId, reloadAd]);

  return { loading, showInterstitialAd };
}

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('selector');
  const [fortuneResult, setFortuneResult] = useState<FortuneResult | null>(null);
  const [selectedSignId, setSelectedSignId] = useState<string>('');
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const { loading: adLoading, showInterstitialAd } = useInterstitialAd();
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    lastVisitDate: '',
    totalVisits: 0,
    lastSignId: '',
  });
  const [lastSignId, setLastSignId] = useState<string>('');
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      const [streakData, savedSignId] = await Promise.all([
        getStreakData(),
        getLastSignId(),
      ]);
      setStreak(streakData);
      setLastSignId(savedSignId);
    };
    loadData();
  }, []);

  // Reload data when returning to selector
  useEffect(() => {
    if (screen === 'selector') {
      const loadData = async () => {
        const [streakData, savedSignId] = await Promise.all([
          getStreakData(),
          getLastSignId(),
        ]);
        setStreak(streakData);
        setLastSignId(savedSignId);
      };
      loadData();
    }
  }, [screen]);

  // Cleanup loading timer
  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  const handleSelectSign = useCallback(async (signId: string) => {
    try {
      generateHapticFeedback({ type: 'softMedium' });
    } catch {}

    const result = getZodiacFortune(signId);
    setSelectedSignId(signId);
    setFortuneResult(result);
    setPremiumUnlocked(false);

    // Update streak and save selected sign
    const updatedStreak = await updateStreak(signId);
    setStreak(updatedStreak);
    await saveLastSignId(signId);
    setLastSignId(signId);

    // Show loading screen first
    setScreen('loading');

    // Transition to result after 1.8s
    loadingTimerRef.current = setTimeout(() => {
      setScreen('result');
    }, 1800);
  }, []);

  const handleBack = useCallback(() => {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    setFortuneResult(null);
    setPremiumUnlocked(false);
    setScreen('selector');
  }, []);

  const handleUnlockPremium = useCallback(() => {
    showInterstitialAd({
      onDismiss: () => {
        setPremiumUnlocked(true);
        try {
          generateHapticFeedback({ type: 'softMedium' });
        } catch {}
      },
    });
  }, [showInterstitialAd]);

  return (
    <>
      <DeviceViewport />
      <div className="app">
        {screen === 'selector' && (
          <ZodiacSelector
            streak={streak.currentStreak}
            onSelect={handleSelectSign}
            lastSignId={lastSignId}
          />
        )}
        {screen === 'loading' && <LoadingScreen />}
        {screen === 'result' && fortuneResult && (
          <ResultScreen
            result={fortuneResult}
            signId={selectedSignId}
            premiumUnlocked={premiumUnlocked}
            onBack={handleBack}
            onUnlockPremium={handleUnlockPremium}
            adLoading={adLoading}
          />
        )}
      </div>
    </>
  );
};

export default App;
