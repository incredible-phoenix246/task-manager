import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import themes, { Theme } from "./theme";

interface GlobalState {
  theme: Theme;
}

interface GlobalContextProps {
  children: ReactNode;
}

interface GlobalUpdateContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalState | undefined>(undefined);
export const GlobalUpdateContext = createContext<
  Dispatch<SetStateAction<GlobalState>> | undefined
>(undefined);

export const GlobalProvider: React.FC<GlobalContextProps> = ({
  children,
}: GlobalContextProps) => {
  const [selectedTheme, setSelectedTheme] = useState<number>(0);
  const theme = themes[selectedTheme];

  const setGlobalState: Dispatch<SetStateAction<GlobalState>> = (newState) => {
    if (typeof newState === "function") {
      // If newState is a function, use the updater function
      setSelectedTheme((prevTheme) => {
        const updatedTheme = newState(0);
        return typeof updatedTheme === "number" ? updatedTheme : prevTheme;
      });
    } else {
      // If newState is an object, set the new state directly
      setSelectedTheme(newState.theme);
    }
  };

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={setGlobalState}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
