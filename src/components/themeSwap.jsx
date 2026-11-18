import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const themeSwap = () => {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
  }, [isDark]);

  if (isDark) {
    return (
      <button className="btn btn-circle" onClick={handleTheme}>
        <Sun />
      </button>
    );
  }

  return (
    <button className="btn btn-circle" onClick={handleTheme}>
      <Moon />
    </button>
  );
};

export default themeSwap;
