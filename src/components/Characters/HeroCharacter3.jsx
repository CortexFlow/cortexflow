import React, { useEffect } from "react";

// Importa il modulo dotlottie-player
const Character2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '-20px 0' }}>
      <dotlottie-player
        src="https://lottie.host/405e67a7-e488-43ae-8e13-ba9c3498ad99/S9JNEu0pZX.json"
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

export default Character2;
