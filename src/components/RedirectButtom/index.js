import { Redirect } from "react-router-dom";

import "./styles.css";

function RedirectButtom({ children, href, className, onClick = () => {} }) {
  return (
    <a className={`redirect-buttom ${className}`} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default RedirectButtom;
