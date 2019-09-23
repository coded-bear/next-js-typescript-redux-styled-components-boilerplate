import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
  main: any;
  styleTags: any;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return { ...initialProps, main, styleTags };
  }

  render() {
    const { main, styleTags } = this.props;
    return (
      <Html>
        <Head>{styleTags}</Head>
        <body>
          {main}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
