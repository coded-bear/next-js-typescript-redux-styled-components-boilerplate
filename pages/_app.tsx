import App from "next/app";
import { initStore } from "../store/store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import Layout from "../containers/layouts";

interface Props {
  store: any;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
