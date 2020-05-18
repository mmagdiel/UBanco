import React from "react"
import Form from "react-bootstrap/Form"
import { navigate } from "gatsby"
import Btn from "../../../desing-system/src/components/atoms/btnPreventDefault"
var numeral = require("numeral")

export default ({ children, min, max, step, onClick, value, setValue }) => {
  const handleChange = e => setValue(e.target.value)
  const handleClick = value => {
    navigate("/info")
    onClick(value)
  }
  return (
    <div className="position-relative">
      {children}
      <header
        className="position-absolute"
        style={{ top: "25vh", left: "10%" }}
      >
        <h1>
          Apoyandote a conseguir <em>tus metas</em>
        </h1>
        <div className="d-flex align-items-center">
          <h6 className="mr-3">Respaldandote con el financiamiento</h6>
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
            <Btn
              value={value}
              onClick={handleClick}
              label="Solicitar Credito"
            />
          </Form>
        </div>
      </header>
    </div>
  )
}
