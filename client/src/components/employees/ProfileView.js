import React from 'react';
import { Link } from 'react-router-dom';
import EmployeesService from '../../tools/employees-service';
import "./ProfileView.css";

class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "none",
      buttonName: "Read more",
      employee: {}
    };
    this.EmployeesService = new EmployeesService();
  }

  toggleBio = () => {
    if (this.state.display === "none" && this.state.buttonName === "Read more") {
      this.setState({
        "display": "block",
        "buttonName": "Read less"
      })
    } else {
      this.setState({
        "display": "none",
        "buttonName": "Read more"
      })
    }
  }

  componentDidMount() {
    this.EmployeesService.oneEmployee(this.props.match.params.id)
      .then(employeeData => {
        this.setState({
          ...this.state,
          employee: employeeData
        });
      });
  };

  render() {
    let employeeData = this.state.employee;
    return (
      <div className="container">
        <div className="box">
          <div className="close">
            <Link to='/'><i className="fas fa-window-close"></i></Link>
          </div>
          <div className="img">
            <img src={employeeData.image} alt="img" className="card-img rounded-circle" />
          </div>
          <div className="box-info">
            <h5 className="card-title info">Name: <span>{employeeData.name}</span></h5>
            <h5 className="card-text info">Age: <span>{employeeData.age} years old</span></h5>
            <div className="bio-container">
              <div className="bio">
                <p className="card-text">Bio:</p>
                <button onClick={() => this.toggleBio()}>{this.state.buttonName}</button>
              </div>
              <span style={{ display: this.state.display }}>{employeeData.bio}</span>
            </div>
            <div className="return-link">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileView;
