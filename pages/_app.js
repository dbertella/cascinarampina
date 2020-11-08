
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from 'lib/gtag'
import { ThemeProvider } from "theme-ui";
import theme from "styles/theme";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      document?.body?.classList?.remove?.("overflow-hidden");
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
