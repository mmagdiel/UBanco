import React from "react"
import Slider from "./slider"

export default ({ children, fn }) => {
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
          <Slider min="10000" max="1000000" step="10000" onClick={fn} />
        </div>
      </header>
    </div>
  )
}
