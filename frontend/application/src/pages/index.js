import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Navbar from "../../../desing-system/src/components/molecules/navbar"
import { connect } from "react-redux"
import silhouette from "../images/silhouette.png"
import Logo from "../../../desing-system/src/components/atoms/logo"
import Nav from "../../../desing-system/src/components/molecules/nav"
import { setAmount } from "../redux/actions"
import Under from "../../../desing-system/src/components/atoms/under"

const Index = ({ increment }) => {
  const min = "10000",
    max = "1000000",
    step = "10000",
    [value, setValue] = useState(min),
    [close, toggleClose] = useState(false)
  return (
    <>
      <Header
        min={min}
        max={max}
        step={step}
        value={value}
        onClick={increment}
        setValue={setValue}
      >
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
        <img className="w-100" src={silhouette} alt="gasdfg" />
      </Header>
      <Under
        classChild="mt-5 pt-5"
        classDad="d-flex justify-content-center  align-items-center"
      />
    </>
  )
}
const mapDispatchToProps = dispatch => {
  return { increment: amount => dispatch(setAmount(amount)) }
}

export default connect(null, mapDispatchToProps)(Index)
