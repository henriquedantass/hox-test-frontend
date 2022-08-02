import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },

  styles: {
    global: {
      "html, body": {
        color: "#3F72AF",
        background: "#112D4E",
        lineHeight: "tall",
        scrollBehavior: "smooth",
      },
    },
  },
});
