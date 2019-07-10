import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // employeeID: "",
      filteredEmployee: [],
    }
  }

  searchText = (e) => {
    this.setState({
      ...this.state,
      employeeID: e.target.value
    })
  }

  filterEmployee(employeeID) {
    let filteredEmployee = [...this.state.data];
    if (employeeID.length === 0) {
      this.setState({
        ...this.state,
        data: this.state.dataCopy
      })
    }
    else {
      this.setState({
        ...this.state,
        data: filteredEmployee.filter(employee =>
          employee._id.toLowerCase().includes(employeeID.toLowerCase())
        )
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "rgb(71,125,197)" }}>
          <img className="" src="/img/logo.png" alt="logo" width="150"></img>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{ position: "absolute", right: 0, left: 0, bottom: 15, color: "white", fontSize: 30 }}>
                <Link className="text-white" to="/">Members </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
            </div>
          </div>
        </nav>
      </React.Fragment >
    )
  }
}

export default Navbar;
