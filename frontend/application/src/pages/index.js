import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Navbar from "../../../desing-system/src/components/molecules/navbar"
import { connect } from "react-redux"
import silhouette from "../images/silhouette.png"
import Logo from "../../../desing-system/src/components/atoms/logo"
import Nav from "../../../desing-system/src/components/molecules/nav"
import { setAmount } from "../redux/actions"

const Index = ({ increment }) => {
  return (
    <Header fn={increment}>
      <Navbar>
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <Nav>
          <Link className="nav-link" to="/info">
            Info
          </Link>
          <Link className="nav-link" to="/blog">
            Nostros
          </Link>
          <Link className="nav-link" to="/blog">
            Cancelar
          </Link>
        </Nav>
      </Navbar>
      <img src={silhouette} alt="gasdfg" />
    </Header>
  )
}
const mapDispatchToProps = dispatch => {
  return { increment: amount => dispatch(setAmount(amount)) }
}

export default connect(null, mapDispatchToProps)(Index)
