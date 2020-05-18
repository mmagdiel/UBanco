import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { incrementCounter } from "../redux/actions"

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch(incrementCounter()) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Redux example</h3>
        </Link>
        <ConnectedCounter />
        <ul>
          <li>
            <Link to="/a/">a</Link>
          </li>
          <li>
            <Link to="/b/">b</Link>
          </li>
          <li>
            <Link to="/c/">c</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
