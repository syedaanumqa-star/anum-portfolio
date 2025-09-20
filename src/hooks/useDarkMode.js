import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // ⚡ Invert the logic
    if (theme === "light") {
      // Light mode => dark UI
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      // Dark mode => light UI
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
