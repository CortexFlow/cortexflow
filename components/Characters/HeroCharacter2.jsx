import React, { useEffect } from 'react';


// Importa il modulo dotlottie-player
const Character2 = () => {
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
      <dotlottie-player 
        src="https://lottie.host/80a53b3b-d68f-40d8-9ac2-bf3958b48ea5/Ljy83Fhkr4.json" 
        background="transparent" 
        speed="1" 
        style={{ width: '550px', height: '550px' }} 
        loop 
        autoplay>
      </dotlottie-player>
    );
  };
  
  export default Character2;