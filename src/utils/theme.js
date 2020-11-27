import { DefaultTheme, Colors } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.purple900,
    secondary: Colors.purple500,
    error: Colors.red500
  }
};
