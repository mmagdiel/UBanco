import React from "react";
import Button from "../atoms/btnPreventDefault";

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
          <form className="form-inline">
            <div className="form-group mr-3">
              <input
                className="form-control"
                type="text"
                placeholder="1.000.000"
              />
            </div>
            <Button label="Solicitar Credito" fn={fn} />
          </form>
        </div>
      </header>
    </div>
  );
};
