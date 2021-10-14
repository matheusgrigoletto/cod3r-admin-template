import React from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = React.createContext<AppContextProps>({
  theme: "",
  toggleTheme: () => {},
});

export function AppProvider(props: React.PropsWithChildren<{}>) {
  const [theme, setTheme] = React.useState<Theme>("");

  const toggleTheme = () => {
    const chosenTheme = theme === "" ? "dark" : "";
    window.localStorage.setItem("theme", chosenTheme);
    setTheme(chosenTheme);
  };

  React.useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    setTheme((theme ?? "") as Theme);
  }, []);

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
