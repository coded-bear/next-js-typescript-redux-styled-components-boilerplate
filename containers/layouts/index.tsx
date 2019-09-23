import { GlobalStyle } from "../../styled/global";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />

    {children}
  </>
);

export default Layout;
