import { createContext, useContext, useState } from 'react';

const EmblemPositioningContext = createContext(null);

export const defaultHeroConfig = {
  translateX: 0,
  translateY: 0,
  width: 100,
  opacity: 100,
};

export const defaultHeaderConfig = {
  translateX: 0,
  translateY: 0,
  height: 32,
  blendMode: 'normal',
};

export function EmblemPositioningProvider({ children }) {
  const [heroConfig, setHeroConfig] = useState(defaultHeroConfig);
  const [headerConfig, setHeaderConfig] = useState(defaultHeaderConfig);

  return (
    <EmblemPositioningContext.Provider value={{ heroConfig, setHeroConfig, headerConfig, setHeaderConfig }}>
      {children}
    </EmblemPositioningContext.Provider>
  );
}

export function useEmblemPositioning() {
  return useContext(EmblemPositioningContext);
}
