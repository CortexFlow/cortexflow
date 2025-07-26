import React, { useEffect } from 'react';

// Importa il modulo dotlottie-player
const Error404 = () => {
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
        src="https://lottie.host/2bfb1896-cbab-440b-bbe5-584cc0169c66/pXYm4Keld0.json" 
        background="transparent" 
        speed="1" 
        style={{ width: '350px', height: '350px' }} 
        loop 
        autoplay>
      </dotlottie-player>
    </div>
  );
};

export default Error404;
