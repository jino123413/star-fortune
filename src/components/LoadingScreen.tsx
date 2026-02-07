import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <img
        src="/mascot/crystal-gaze.png"
        alt="별여우"
        className="loading-mascot"
      />
      <p className="loading-text">운세를 읽고 있어요...</p>
      <div className="loading-dots">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>
    </div>
  );
};

export default LoadingScreen;
