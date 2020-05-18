import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Navbar from "../../../desing-system/src/components/molecules/navbar"
import Logo from "../../../desing-system/src/components/atoms/logo"
import Nav from "../../../desing-system/src/components/molecules/nav"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { setEmail, setPassword } from "../redux/actions"

const Registro = ({ email, password, sEmail, sPassword }) => {
  const [close, toggleClose] = useState(false),
    able = () =>
      email === "" || password === ""
        ? setAbleSubmit(true)
        : setAbleSubmit(false),
    [ableSubmit, setAbleSubmit] = useState(true),
    handleEmail = e => {
      sEmail(e.target.value)
      able()
    },
    handlePassword = e => {
      sPassword(e.target.value)
      able()
    },
    handleClick = e => {
      e.preventDefault()
      navigate("/respuesta")
    }

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
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2 className="mb-3">Usuarios registrados</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  onChange={handleEmail}
                  type="email"
                  placeholder="maria@email.com"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  onChange={handlePassword}
                  type="password"
                  placeholder="Ssshhh"
                />
              </Form.Group>

              <Button
                disabled={ableSubmit}
                onClick={handleClick}
                variant="primary"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ amount, email, password }) => {
  return { amount, email, password }
}

const mapDispatchToProps = dispatch => {
  return {
    sEmail: email => dispatch(setEmail(email)),
    sPassword: password => dispatch(setPassword(password)),
  }
}

Registro.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sEmail: PropTypes.func.isRequired,
  sPassword: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Registro)
