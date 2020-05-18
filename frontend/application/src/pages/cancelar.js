import React, { useState } from "react"
import { Link } from "gatsby"
import Navbar from "../../../desing-system/src/components/molecules/navbar"
import Logo from "../../../desing-system/src/components/atoms/logo"
import Nav from "../../../desing-system/src/components/molecules/nav"
import Under from "../../../desing-system/src/components/atoms/under"

const Cancelar = ({ increment }) => {
  const [close, toggleClose] = useState(false)
  return (
    <>
      <Navbar close={close} toggleClose={toggleClose}>
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <Nav close={close}>
          <Link className="nav-link" to="/informacion">
            Información
          </Link>
          <Link className="nav-link" to="/nosotros">
            Nosotros
          </Link>
          <Link className="nav-link active" to="/cancelar">
            Cancelar
          </Link>
        </Nav>
      </Navbar>
      <Under
        classChild="mt-5 pt-5"
        classDad="d-flex justify-content-center  align-items-center"
      />
    </>
  )
}
export default Cancelar
