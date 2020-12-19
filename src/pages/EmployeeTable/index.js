import React, { useState, useEffect } from "react";
import API from "../../utils/API";
//Include Components
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Table from "../../components/Table";
import Limit from "../../components/Limit";
import EmployeeProfile from "../../components/EmployeeProfile";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
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

    const [sortedList, setSortedList] = useState([]);

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        API.getEmployees(limit)
            .then(results => {
                setEmployeeList(results.data.results);
                //Initially, set the filtered list to the initial results.
                setFilteredList(results.data.results);
                console.log(filteredList);
            })
            .catch(error => {
                setError("Something went wrong")
            });
    }, [limit]);

    const handleLimitChange = event => {
        setEmployeeList([]);
        setLimit(event.target.value);
    };


    //Configure the function which will be passed into the sort() function depending on key selected to sort.
    const configureSort = function(fields, reversed, format, sub){
        let key;

        if(format) {
            key = function(x) {
                if(sub) {
                    return format(x[fields][sub]);
                } else {
                    return format(x[fields]);
                } 
            }
        } else {
            key = function(x) {
                if(sub) {
                    return x[fields][sub]; 
                } else {
                    return x[fields];
                }
            }
        }

        console.log(key);
     
        //If reversed is equal to false, we want to sort ascending. Otherwise, sort descending.
        reversed = !reversed ? 1 : -1;
     
        //Return the function that will be used in the JavaScript sort() method on the array of employee objects.
        return function (a, b) {
            return a = key(a), b = key(b), reversed * ((a > b) - (b > a));
        } 
     }

    const handleSortChange = event => {
        console.log(event.target.value);
        if(event.target.value === 'firstNameAsc') {
            setFilteredList(filteredList.sort(configureSort('name',false,function(a){return a.toUpperCase()},'first')));
        } else if(event.target.value === 'firstNameDesc') {
            setFilteredList(filteredList.sort(configureSort('name',true,function(a){return a.toUpperCase()},'first')));
        } else if(event.target.value === 'lastNameAsc') {
            setFilteredList(filteredList.sort(configureSort('name',false,function(a){return a.toUpperCase()},'last')));
        } else if(event.target.value === 'lastNameDesc') {
            setFilteredList(filteredList.sort(configureSort('name',true,function(a){return a.toUpperCase()},'last')));
        }
        console.log(filteredList);
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
            <Jumbotron text="Employee Directory"/>
            <Container>
                <Limit 
                    handleLimitChange={handleLimitChange}
                />
                <Filter
                    handleFilterChange={handleFilterChange}
                    handleFilterField={handleFilterField}
                />
                <Sort
                    handleSortChange={handleSortChange}
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