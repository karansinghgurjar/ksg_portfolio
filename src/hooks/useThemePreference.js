import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { getStorageItem, setStorageItem } from "../utils/storage.js";

export function useThemePreference() {
  const [themeMode, setThemeMode] = useState("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedPreference = getStorageItem(siteConfig.storageKeys.theme);
    const initialMode =
      storedPreference === "light" ||
      storedPreference === "dark" ||
      storedPreference === "system"
        ? storedPreference
        : "system";

    setThemeMode(initialMode);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return;

    setStorageItem(siteConfig.storageKeys.theme, themeMode);
    setIsDark(themeMode === "system" ? mediaQuery.matches : themeMode === "dark");
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return undefined;

    const syncWithSystemTheme = (event) => {
      if (themeMode === "system") {
        setIsDark(event.matches);
      }
    };

    mediaQuery.addEventListener("change", syncWithSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncWithSystemTheme);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.toggle("dark", isDark);
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isDark]);

  const cycleThemeMode = () => {
    setThemeMode((prev) =>
      prev === "system" ? "dark" : prev === "dark" ? "light" : "system"
    );
  };

  return {
    themeMode,
    cycleThemeMode,
  };
}
