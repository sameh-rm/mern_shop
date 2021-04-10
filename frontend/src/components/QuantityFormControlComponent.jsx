import React from "react";
import { Form } from "react-bootstrap";

const QuantityFormControlComponent = ({ countInStock, qty, handler }) => {
  return (
    <Form.Control as="select" value={qty} onChange={handler}>
      {[...Array(countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </Form.Control>
  );
};

export default QuantityFormControlComponent;
