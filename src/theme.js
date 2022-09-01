import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#0D0130",
    },
    secondary: {
      100: "#48BB78",
    },
    border: {
        100: "#C0C0C0",
      },
      background:{
        100:"#f8f3ee"
      }
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});
