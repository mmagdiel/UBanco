import React from "react"
import { Link } from "gatsby"
import Header from "../../../desing-system/src/components/organisms/header"
import Navbar from "../../../desing-system/src/components/molecules/navbar"

import silhouette from "../images/silhouette.png"
import Logo from "../../../desing-system/src/components/atoms/logo"

import Nav from "../../../desing-system/src/components/molecules/nav"
const Home = () => (
  <Header fn={e => console.log("hola mundo")}>
    <Navbar>
      <Link className="navbar-brand" to="/">
        <Logo />
      </Link>
      <Nav>
        <Link className="nav-link" to="/blog">
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

export default Home
/*
      <Nav>
        <Link to="/blog">Hola</Link>
        <Link to="/blog">Hola</Link>
      </Nav>
      import Nav from "../../../desing-system/src/components/molecules/nav"
*/
