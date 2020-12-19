import { Button } from 'react-bootstrap';

function TableRow(props) {
    if(props.isThead) {
        return (
            <tr>
                <th scope="col"><i className="fad fa-camera-alt ml-3"></i></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col"></th>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>
                    <img 
                        src={props.thumbnail} 
                        alt="No Photo"
                    >
                    </img>
                </td>
                <td>
                    {props.firstName}
                </td>
                <td>
                    {props.lastName}
                </td>
                <td onClick={props.handleEmployeeDataChange}>
                    <Button 
                        firstname={props.firstName}
                        lastname={props.lastName}
                        photo={props.photo}
                        gender={props.gender}
                        email={props.email}
                        dob={props.dob}
                        age={props.age}
                        phone={props.phone}
                        cell={props.cell}
                        streetname={props.streetname}
                        streetnumber={props.streetnumber}
                        city={props.city}
                        state={props.state}
                        postcode={props.postcode}
                        variant="primary" 
                        onClick={props.handleModalShow}
                        className="fas fa-user"
                    >
                    </Button>
                </td>
            </tr>
        )
    }
}

export default TableRow;