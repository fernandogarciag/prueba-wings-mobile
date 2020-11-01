import { Fragment } from "react";

import "./styles.css";
import Header from "./Header";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
}

export default Layout;
