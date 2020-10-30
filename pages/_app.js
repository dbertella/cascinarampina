import { ThemeProvider } from "theme-ui";
import theme from "styles/theme";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
