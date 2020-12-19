import React, { useState, useEffect } from "react";
import API from "../../utils/API";
//Include Components
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Table from "../../components/Table";
import Limit from "../../components/Limit";
import EmployeeProfile from "../../components/EmployeeProfile";
import Filter from "../../components/Filter";
import "../../EmployeeTable.css"

function EmployeeTable() {
    //Set state 
    const [limit, setLimit] = useState(25);
    const [error, setError] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    //This will hold terms to filter
    const [filteredList, setFilteredList] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    const [filterField, setFilterField] = useState("");
    const [filterValue, setFilterValue] = useState("");

    //Modal State
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        API.getEmployees(limit)
            .then(results => {
                setEmployeeList(results.data.results);
                //Initially, set the filtered list to the initial results.
                setFilteredList(results.data.results);
                console.log(employeeList);
            })
            .catch(error => {
                setError("Something went wrong")
            });
    }, [limit]);

    const handleLimitChange = event => {
        setEmployeeList([]);
        setLimit(event.target.value);
    };

    //Handles when a user changes the field to be filtered.
    const handleFilterField = event => {
        //Set the filter field to the field selected.
        setFilterField(event.target.value);
    }

    //Handle when a user changes the "contains" input.
    const handleFilterChange = event => {
        //Don't filter the results if a field is not selected.
        if(!filterField) {
            setFilteredList(employeeList);
            return;
        }

        //Get the value to be searched for.
        setFilterValue(event.target.value);
        
        console.log(`Current value of filter field: ${filterField}`);

        //Clear the old filtered list
        //setFilteredList([]);

        //Create the newly filtered list using the field to be filtered and the typed value input.
        if(filterField === "firstName") {
            console.log(`Searching for ${filterValue}`);
            const newFilteredList = employeeList.filter(employee => employee.name.first.includes(filterValue));
            setFilteredList(newFilteredList);
            console.log(filteredList);
            console.log(employeeList);
        }
        
    };

    //This will handle the change of the highlighted employee.
    const handleEmployeeDataChange = event => {
        const thisEmployee = {
            firstName: event.target.getAttribute("firstname"),
            lastName: event.target.getAttribute("lastname"),
            photo: event.target.getAttribute("photo"),
            gender: event.target.getAttribute("gender"),
            email: event.target.getAttribute("email"),
            dob: event.target.getAttribute("dob"),
            age: event.target.getAttribute("age"),
            phone: event.target.getAttribute("phone"),
            cell: event.target.getAttribute("cell"),
            streetname: event.target.getAttribute("streetname"),
            streetnumber: event.target.getAttribute("streetnumber"),
            city: event.target.getAttribute("city"),
            state: event.target.getAttribute("state"),
            postcode: event.target.getAttribute("postcode")
        };
        setEmployeeData(thisEmployee);
    }

    //Handle the opening/closing of the modal to display more information about an employee.
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    
    return (
        <div>
            <Jumbotron text="Employee Table"/>
            <Container>
                <Limit 
                    handleLimitChange={handleLimitChange}
                />
                <Filter
                    handleFilterChange={handleFilterChange}
                    handleFilterField={handleFilterField}
                />
                <Table 
                    data={filteredList} 
                    handleEmployeeDataChange={handleEmployeeDataChange}
                    handleModalShow={handleModalShow}
                />
                <EmployeeProfile
                    data={employeeData}
                    handleModalClose={handleModalClose}
                    handleModalShow={handleModalShow}
                    modalShow={modalShow}
                />
            </Container>
        </div>
    );
}

export default EmployeeTable;