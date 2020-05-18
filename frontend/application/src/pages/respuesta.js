import React, { useState } from "react"
import { Link } from "gatsby"
import Navbar from "../../../desing-system/src/components/molecules/navbar"
import Logo from "../../../desing-system/src/components/atoms/logo"
import Under from "../../../desing-system/src/components/atoms/under"
import Nav from "../../../desing-system/src/components/molecules/nav"
import useData from "../hooks/useData"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const url = "http://localhost:3000/posts"
const Respuesta = ({ amount, email, password }) => {
  const partial = { amount, email, password }
  const body = JSON.stringify(partial)
  const data = useData(url, body)
  data.then(res =>
    Number.isInteger(res.id)
      ? alert("Tu credito fue aprovado")
      : console.log("Mejor la proxima")
  )
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
          <Link className="nav-link" to="/cancelar">
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

const mapStateToProps = ({ amount, email, password }) => {
  return { amount, email, password }
}

Respuesta.propTypes = {
  amount: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, {})(Respuesta)
