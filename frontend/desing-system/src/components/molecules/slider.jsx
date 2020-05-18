import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Btn from "../atoms/btnPreventDefault";
var numeral = require("numeral");

const Slider = ({ onClick, min, max, step }) => {
  const [value, setValue] = useState(min);
  const handleChange = (e) => setValue(e.target.value);
  return (
    <Form className="d-flex align-items-center">
      <Form.Group className="d-flex flex-column justify-content-center">
        <Form.Label className="mb-0 text-center">
          {numeral(value).format("$0,0")}
        </Form.Label>
        <Form.Control
          min={min}
          max={max}
          step={step}
          value={value}
          className="custom-range mb-0"
          onChange={handleChange}
          type="range"
        />
      </Form.Group>
      <Btn onClick={onClick} label="Solicitar Credito" />
    </Form>
  );
};

export default Slider;
