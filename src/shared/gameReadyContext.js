import { createContext, useContext } from 'react';

export const GameReadyContext = createContext(true);
export const useGameReady = () => useContext(GameReadyContext);
