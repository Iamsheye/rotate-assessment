import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            50: { value: "#E9FAF0" },
            100: { value: "#D7EAFF" },
            500: { value: "#02983E" },
            600: { value: "#00732E" },
            700: { value: "#005c24" },
            800: { value: "#00481D" },
          },
          secondary: {
            500: { value: "#1873DE" },
            600: { value: "#6236CC" },
            700: { value: "#7A44FF" },
          },
          success: {
            50: { value: "#E9FAF0" },
            500: { value: "#02983E" },
            600: { value: "#08B94E" },
          },
          error: {
            50: { value: "#FFF1F0" },
            100: { value: "#FFE2E0" },
            500: { value: "#E5372B" },
            600: { value: "#E6372B" },
            700: { value: "#C6190D" },
          },
          warning: {
            50: { value: "#FFF9ED" },
            500: { value: "#EBA622" },
            600: { value: "#FF9500" },
          },
          info: {
            50: { value: "#ECF5FF" },
            500: { value: "#0053B5" },
          },
          gray: {
            25: { value: "#FAFAFA" },
            50: { value: "#F0F1F3" },
            100: { value: "#E0E2E7" },
            200: { value: "#C2C6CE" },
            300: { value: "#F2F3F7" },
            400: { value: "#858D9D" },
            500: { value: "#667085" },
            600: { value: "#A3A9B6" },
            700: { value: "#525D73" },
            800: { value: "#404A60" },
            900: { value: "#404A60" },
          },
          text: {
            primary: { value: "#030229" },
            secondary: { value: "#334155" },
            tertiary: { value: "#383874" },
            muted: { value: "#404A60" },
            subtle: { value: "#656575" },
            dark: { value: "#333333" },
          },
          background: {
            primary: { value: "#FFFFFF" },
            secondary: { value: "#FAFAFA" },
            tertiary: { value: "#F2EDFF" },
            accent: { value: "#D9D9D9" },
          },
          white: { value: "#FFFFFF" },
          transparent: { value: "transparent" },
          black: {
            value: "#000000",
            alpha: {
              2: { value: "rgba(0, 0, 0, 0.02)" },
              5: { value: "rgba(0, 0, 0, 0.05)" },
              6: { value: "rgba(0, 0, 0, 0.06)" },
              13: { value: "#0000000D" },
              16: { value: "#0000000F" },
              25: { value: "#00000040" },
              29: { value: "#00000029" },
            },
          },
          shadow: {
            light: { value: "#0000000D" },
            medium: { value: "#00000040" },
            strong: { value: "rgba(0, 0, 0, 0.06)" },
            button: { value: "rgba(12, 12, 13, 0.05)" },
          },
        },
        fontSizes: {
          xs: { value: "0.625rem" }, // 10px
          sm: { value: "0.75rem" }, // 12px
          md: { value: "0.875rem" }, // 14px
          base: { value: "0.9375rem" }, // 15px
          lg: { value: "1rem" }, // 16px
          xl: { value: "1.125rem" }, // 18px
          "2xl": { value: "20px" }, // 20px
          "3xl": { value: "2.25rem" }, // 36px
          // Specific sizes found in codebase
          "10px": { value: "10px" },
          "12px": { value: "12px" },
          "14px": { value: "14px" },
          "15px": { value: "15px" },
          "16px": { value: "16px" },
          "18px": { value: "18px" },
          "20px": { value: "20px" },
        },
        fontWeights: {
          normal: { value: "400" },
          medium: { value: "500" },
          semibold: { value: "600" },
          bold: { value: "700" },
        },
        lineHeights: {
          tight: { value: "0.625rem" },
          snug: { value: "0.875rem" },
          normal: { value: "1.25rem" },
          relaxed: { value: "1.375rem" },
          loose: { value: "1.4" },
          base: { value: "1.5" },
          comfortable: { value: "1.5rem" },
          spacious: { value: "1.75" },
          extraSpacious: { value: "1.75em" },
          large: { value: "2.375rem" },
          // Specific values from codebase
          "0.625rem": { value: "0.625rem" },
          "0.875rem": { value: "0.875rem" },
          "1.25rem": { value: "1.25rem" },
          "1.375rem": { value: "1.375rem" },
          "1.4": { value: "1.4" },
          "1.5": { value: "1.5" },
          "1.5rem": { value: "1.5rem" },
          "1.75": { value: "1.75" },
          "2.375rem": { value: "2.375rem" },
        },
        spacing: {
          px: { value: "1px" },
          0.5: { value: "0.125rem" }, // 2px
          1: { value: "0.25rem" }, // 4px
          1.5: { value: "0.375rem" }, // 6px
          2: { value: "0.5rem" }, // 8px
          2.5: { value: "0.625rem" }, // 10px
          3: { value: "0.75rem" }, // 12px
          3.5: { value: "0.875rem" }, // 14px
          4: { value: "1rem" }, // 16px
          5: { value: "1.25rem" }, // 20px
          6: { value: "1.5rem" }, // 24px
          7: { value: "1.75rem" }, // 28px
          8: { value: "2rem" }, // 32px
          9: { value: "2.25rem" }, // 36px
          10: { value: "2.5rem" }, // 40px
          11: { value: "2.75rem" }, // 44px
          12: { value: "3rem" }, // 48px
          14: { value: "3.5rem" }, // 56px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          28: { value: "7rem" }, // 112px
          32: { value: "8rem" }, // 128px
          36: { value: "9rem" }, // 144px
          40: { value: "10rem" }, // 160px
          44: { value: "11rem" }, // 176px
          48: { value: "12rem" }, // 192px
          52: { value: "13rem" }, // 208px
          56: { value: "14rem" }, // 224px
          60: { value: "15rem" }, // 240px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
        },
        sizes: {
          // Existing spacing values (duplicated for sizes)
          px: { value: "1px" },
          0.5: { value: "0.125rem" }, // 2px
          1: { value: "0.25rem" }, // 4px
          1.5: { value: "0.375rem" }, // 6px
          2: { value: "0.5rem" }, // 8px
          2.5: { value: "0.625rem" }, // 10px
          3: { value: "0.75rem" }, // 12px
          3.5: { value: "0.875rem" }, // 14px
          4: { value: "1rem" }, // 16px
          5: { value: "1.25rem" }, // 20px
          6: { value: "1.5rem" }, // 24px
          7: { value: "1.75rem" }, // 28px
          8: { value: "2rem" }, // 32px
          9: { value: "2.25rem" }, // 36px
          10: { value: "2.5rem" }, // 40px
          11: { value: "2.75rem" }, // 44px
          12: { value: "3rem" }, // 48px
          14: { value: "3.5rem" }, // 56px
          16: { value: "4rem" }, // 64px
          20: { value: "5rem" }, // 80px
          24: { value: "6rem" }, // 96px
          28: { value: "7rem" }, // 112px
          32: { value: "8rem" }, // 128px
          36: { value: "9rem" }, // 144px
          40: { value: "10rem" }, // 160px
          44: { value: "11rem" }, // 176px
          48: { value: "12rem" }, // 192px
          52: { value: "13rem" }, // 208px
          56: { value: "14rem" }, // 224px
          60: { value: "15rem" }, // 240px
          64: { value: "16rem" }, // 256px
          72: { value: "18rem" }, // 288px
          80: { value: "20rem" }, // 320px
          96: { value: "24rem" }, // 384px
          // Additional sizes found in codebase
          "110px": { value: "110px" },
          "216px": { value: "216px" },
          "288px": { value: "288px" },
          "374px": { value: "374px" },
          "460px": { value: "460px" },
          "100vh": { value: "100vh" },
        },
        radii: {
          none: { value: "0" },
          sm: { value: "0.125rem" }, // 2px
          base: { value: "0.25rem" }, // 4px
          md: { value: "0.375rem" }, // 6px
          lg: { value: "0.5rem" }, // 8px
          xl: { value: "0.75rem" }, // 12px
          "2xl": { value: "1rem" }, // 16px
          "3xl": { value: "1.5rem" }, // 24px
          full: { value: "9999px" },
          "20px": { value: "20px" },
          "38px": { value: "38px" },
          "50%": { value: "50%" },
        },
        shadows: {
          // Existing shadows
          xs: { value: "0px 1px 3px 0px #0000000D" },
          sm: { value: "0px 2.9px 4px 0px #0000000D" },
          md: { value: "0px 4px 4px 0px #00000040" },
          lg: { value: "0px 16px 18px 0px rgba(0, 0, 0, 0.06)" },
          button: { value: "0px 1px 4px 0px rgba(12, 12, 13, 0.05)" },
          // Shadows from Tailwind config
          drop: { value: "0px 1px 3px 0px #0000000D" },
          bg_md: { value: "0px 16px 18px 0px #0000000F" },
          "drop-lg": { value: "0px 2.9px 4px 0px #0000000D" },
          xsm: { value: "0px 2px 2px 2px #00000029" },
          drop_shadow: { value: "0px 4px 4px 0px #00000040" },
        },
        borders: {
          base: { value: "1px solid" },
          thick: { value: "8px solid" },
          // Additional border widths from codebase
          "1px": { value: "1px solid" },
          "3px": { value: "3px solid" },
        },
        borderWidths: {
          "1px": { value: "1px" },
          "2.1875": { value: "2.1875px" },
          "1.625": { value: "1.625px" },
          "1.8": { value: "1.8px" },
          "3px": { value: "3px" },
          "8px": { value: "8px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
