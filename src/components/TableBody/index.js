import TableRow from "../TableRow";

function TableBody(props) {
    return (
        <tbody>
            {props.data.map(person => {
                return (
                    <TableRow 
                        key={`${person.name.first} ${person.name.last}`}
                        thumbnail={person.picture.thumbnail}
                        photo={person.picture.large}
                        firstName={person.name.first}
                        lastName={person.name.last}
                        gender={person.gender}
                        email={person.email}
                        dob={person.dob.date}
                        age={person.dob.age}
                        phone={person.phone}
                        cell={person.cell}
                        streetnumber={person.location.street.number}
                        streetname={person.location.street.name}
                        city={person.location.city}
                        state={person.location.state}
                        postcode={person.location.postcode}
                        handleEmployeeDataChange={props.handleEmployeeDataChange}
                        handleModalShow={props.handleModalShow}
                    />
                );
            })}
        </tbody>
    );
}

export default TableBody;