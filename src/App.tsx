import React, { useState, useCallback, useEffect } from 'react';
import { GoogleAdMob } from '@apps-in-toss/web-framework';
import { generateHapticFeedback } from '@apps-in-toss/web-framework';
import { Screen, FortuneResult, StreakData } from './types';
import { getZodiacFortune } from './utils/fortune-engine';
import { getStreakData, updateStreak, getLastSignId, saveLastSignId } from './utils/storage';
import { DeviceViewport } from './components/DeviceViewport';
import ZodiacSelector from './components/ZodiacSelector';
import ResultScreen from './components/ResultScreen';

const AD_GROUP_ID = 'ait-ad-test-interstitial-id';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('selector');
  const [fortuneResult, setFortuneResult] = useState<FortuneResult | null>(null);
  const [selectedSignId, setSelectedSignId] = useState<string>('');
  const [premiumUnlocked, setPremiumUnlocked] = useState(false);
  const [adLoading, setAdLoading] = useState(false);
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    lastVisitDate: '',
    totalVisits: 0,
    lastSignId: '',
  });
  const [lastSignId, setLastSignId] = useState<string>('');

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

    setScreen('result');
  }, []);

  const handleBack = useCallback(() => {
    setFortuneResult(null);
    setPremiumUnlocked(false);
    setScreen('selector');
  }, []);

  const handleUnlockPremium = useCallback(async () => {
    setAdLoading(true);
    try {
      await GoogleAdMob.showInterstitialAd({ adGroupId: AD_GROUP_ID });
      setPremiumUnlocked(true);
    } catch {
      // Ad failed or was dismissed
    } finally {
      setAdLoading(false);
    }
  }, []);

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
