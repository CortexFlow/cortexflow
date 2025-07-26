import React, { useEffect } from 'react';

// Importa il modulo dotlottie-player
const Character1 = () => {
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
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <dotlottie-player
        src="https://lottie.host/9427ed56-eec4-434f-bf22-61217ac1ebae/Yam1A2j4gv.json"
        background="transparent"
        speed="1"
        style={{
          width: '100%',
          maxWidth: '600px',
          height: 'auto',
        }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Character1;
