import React, { useEffect } from 'react';

// Importa il modulo dotlottie-player
const HammeringAnimation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <dotlottie-player 
        src="https://lottie.host/5b70e4fc-44a6-48bb-894f-59cdfef70292/5BlMjzOwIw.json" 
        background="transparent" 
        speed="1" 
        style={{ width: '350px', height: '350px' }} 
        loop 
        autoplay>
      </dotlottie-player>
    </div>
  );
};

export default HammeringAnimation;
