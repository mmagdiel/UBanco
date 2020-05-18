import React, { Component } from "react"
import Form from "react-bootstrap/Form"
import { navigate } from "gatsby"
import Btn from "../../../desing-system/src/components/atoms/btnPreventDefault"
var numeral = require("numeral")

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.min,
    }
  }

  render() {
    const { onClick, min, max, step } = this.props
    const { value } = this.state
    const handleChange = e => this.setState({ value: e.target.value })
    console.log(onClick)
    const handleClick = value => {
      const val = value
      navigate("/info")
      onClick(val)
    }
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
        <Btn value={value} onClick={handleClick} label="Solicitar Credito" />
      </Form>
    )
  }
}
export default Slider
