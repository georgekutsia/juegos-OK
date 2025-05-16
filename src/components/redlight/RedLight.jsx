import { useState, useEffect, useRef } from 'react';
import './RedLight.css';

function RedLight() {
  const [position, setPosition] = useState('center');
  const [showButton, setShowButton] = useState(false);
  const audioRef = useRef("../../../public/audio/¡Chuchuwa _ Chu Chu Uá _ Canciones y clásicos infantiles _ Canciones Infantiles LooLoo.mp3");

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPosition('right'), 5000),
      setTimeout(() => setPosition('top'), 6000),
      setTimeout(() => setPosition('left'), 7500),
      setTimeout(() => setPosition('done'), 10000),

      setTimeout(() => setPosition('final-center'), 14000),
      setTimeout(() => setPosition('done'), 18000),

      setTimeout(() => setPosition('sway-center'), 21000),
      setTimeout(() => setPosition('sway-left'), 26000),

      setTimeout(() => setShowButton(true), 30000), // mostrar botón al final
      setTimeout(() => handlePlay(), 45000), 

    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  return (
    <div className="redlight-fullscreen">
      {position !== 'done' && (
        <div
          className={`redlight-circle ${
            position === 'final-center' ? 'float-soft' :
            position === 'sway-center' ? 'float-sway' :
            'float'
          } ${position}`}
        ></div>
      )}

      {showButton && (
        <button className="round-play-btn" onClick={handlePlay}>
          <i className="fa-solid fa-play"></i>
        </button>
      )}
      <audio ref={audioRef} src="../../../public/audio/¡Chuchuwa _ Chu Chu Uá _ Canciones y clásicos infantiles _ Canciones Infantiles LooLoo.mp3"  />
    </div>
  );
}

export default RedLight;
