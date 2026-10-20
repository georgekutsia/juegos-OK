import { useCallback, useEffect, useRef } from 'react';

// Audio created outside JSX must also stop when a game route is left.
export default function useGameAudio() {
  const soundsRef = useRef(new Set());

  useEffect(() => {
    const sounds = soundsRef.current;
    return () => {
      sounds.forEach(audio => {
        audio.onended = null;
        audio.pause();
      });
    };
  }, []);

  return useCallback(source => {
    const audio = source ? new Audio(source) : new Audio();
    soundsRef.current.add(audio);
    return audio;
  }, []);
}
