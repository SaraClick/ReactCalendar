import React from "react";
import { Button } from "react-bootstrap";

function ButtonGeneric({ styling = "button-generic", children, ...props }) {
  return (
    <Button className={styling} {...props}>
      {children}
    </Button>
  );
}

export default ButtonGeneric;
