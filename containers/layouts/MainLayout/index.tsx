import React, { PureComponent } from "react";
import { GlobalStyle } from "../../../styled/global";
import { Props } from "./interface";

class MainLayout extends PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle />

        {children}
      </>
    );
  }
}

export default MainLayout;
