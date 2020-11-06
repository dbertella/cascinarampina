import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
import { GA_TRACKING_ID } from "lib";

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="it">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}
