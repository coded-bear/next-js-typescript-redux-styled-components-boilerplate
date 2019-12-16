import App from "next/app";
import { initStore } from "../store/store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import MainLayout from "../containers/layouts/MainLayout";
import { AppState } from "../store";

interface Props {
  store: AppState;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
