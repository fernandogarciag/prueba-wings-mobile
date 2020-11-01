import { Fragment } from "react";

import "./styles.css";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default Layout;
