import React from 'react';
import { Link } from 'react-router-dom';
import EmployeesService from '../../tools/employees-service';
import "./ListView.css";

class ListView extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
    this.EmployeesService = new EmployeesService();
  };

  componentDidMount() {
    this.EmployeesService.allEmployees()
      .then(allEmployees => {
        this.setState({
          ...this.state,
          employees: allEmployees
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-columns board">
          {
            this.state.employees.map((employee, idx) => {
              return (
                <Link key={idx} className="" to={`/${employee._id}`}>
                  <div className="card">
                    <div className="short-title">
                      <img src={employee.image} alt="img" className="card-img-top" />
                      <h5 className="card-text empl-name">{employee.name}</h5>
                      <p className="card-text empl-age">{employee.age} years old</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default ListView;
