import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        green: {
          DEFAULT: "#31B82C",
          50: "#B2ECB0",
          100: "#A2E89F",
          200: "#82E07E",
          300: "#62D85D",
          400: "#42D03C",
          500: "#31B82C",
          600: "#258B21",
          700: "#195D16",
          800: "#0D300C",
          900: "#010301",
          950: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
      }
    : {
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
        green: {
          DEFAULT: "#31B82C",
          50: "#000000",
          100: "#010301",
          200: "#0D300C",
          300: "#195D16",
          400: "#258B21",
          500: "#31B82C",
          600: "#42D03C",
          700: "#62D85D",
          800: "#82E07E",
          900: "#A2E89F",
          950: "#B2ECB0",
        },
      }),
});
export const ThemeSettings = (mode: string) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.green.DEFAULT,
            },
            secondary: {
              main: colors.green[50],
            },
            neutral: {
              dark: colors.black.DEFAULT,
              light: colors.white.DEFAULT,
            },
          }
        : {
            primary: {
              main: colors.green.DEFAULT,
            },
            secondary: {
              main: colors.green[50],
            },
            neutral: {
              dark: colors.black.DEFAULT,
              light: colors.white.DEFAULT,
            },
          }),
    },
  };
};
