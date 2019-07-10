import axios from "axios";

class EmployeesService {
    constructor() {
        let service = axios.create({
            baseURL: `http://localhost:5000/api/employees`,
            withCredentials: true
        });
        this.service = service;
    }

    allEmployees = () => {
        return this.service
            .get('/')
            .then(response => response.data)
            .catch(err => console.log(err));
    };

    oneEmployee = (id) => {
        return this.service
            .get(`/${id}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    };
}

export default EmployeesService;