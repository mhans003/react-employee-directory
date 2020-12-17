import React, { useState, useEffect } from "react";
import API from "../../utils/API";
//Include Components
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Table from "../../components/Table";
import Limit from "../../components/Limit";
import EmployeeProfile from "../../components/EmployeeProfile";
import Filter from "../../components/Filter";

function EmployeeTable() {
    //Set state 
    const [limit, setLimit] = useState(25);
    const [error, setError] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        API.getEmployees(limit)
            .then(results => {
                //setEmployeeList(employeeList.concat(results.data.results));
                setEmployeeList(results.data.results);
            })
            .catch(error => {
                setError("Something went wrong")
            });
    }, [limit]);

    const handleLimitChange = event => {
        setEmployeeList([]);
        setLimit(event.target.value);
    };

    const handleFilterChange = event => {
        
    };

    //This will handle the change of the highlighted employee.
    const handleEmployeeDataChange = event => {
        console.log(event.target);
    }
    
    return (
        <div>
            <Jumbotron text="Employee Table" />
            <Container>
                <Limit 
                    handleLimitChange={handleLimitChange}
                />
                <Filter
                    handleFilterChange={handleFilterChange}
                />
                <Table data={employeeList} handleEmployeeDataChange={handleEmployeeDataChange}></Table>
                
            </Container>
        </div>
    );
}

export default EmployeeTable;