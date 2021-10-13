import React, { PropsWithChildren } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = React.createContext<AppContextProps>({
  theme: "",
  toggleTheme: () => {},
});

export function AppProvider(props: PropsWithChildren<{}>) {
  const [theme, setTheme] = React.useState<Theme>("");

  const toggleTheme = () => setTheme(theme === "" ? "dark" : "");

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
