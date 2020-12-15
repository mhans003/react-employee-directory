import React, { useState, useEffect } from "react";
import API from "../../utils/API";
//Include Components
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Table from "../../components/Table";

function EmployeeTable() {
    //Set state 
    const [limit, setLimit] = useState(25);
    const [error, setError] = useState("");
    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        API.getEmployees(limit)
            .then(results => {
                console.log(results.data.results);
                setEmployeeList(employeeList.concat(results.data.results));
            })
            .catch(error => {
                setError("Something went wrong")
            });
    }, []);
    
    return (
        <div>
            <Jumbotron>Employee Table</Jumbotron>
            <Container>
                <Table data={employeeList}></Table>
            </Container>
        </div>
    );
}

export default EmployeeTable;