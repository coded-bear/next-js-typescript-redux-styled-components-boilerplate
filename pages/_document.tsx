import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
  main: any;
  styleTags: any;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps: any = await Document.getInitialProps(ctx);

    const sheet: any = new ServerStyleSheet();
    const main: any = sheet.collectStyles(<Main />);
    const styleTags: any = sheet.getStyleElement();

    return { ...initialProps, main, styleTags };
  }

  render() {
    const { main, styleTags } = this.props;

    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <link rel="icon" href="/static/images/favicon.ico" />

          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
