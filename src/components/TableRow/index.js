function TableRow(props) {
    if(props.isThead) {
        return (
            <tr>
                <th scope="col"><i className="fad fa-camera-alt ml-3"></i></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
        );
    } else {
        return (
            <tr>
                <td><img src={props.thumbnail} alt="No Photo"></img></td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
            </tr>
        )
    }
}

export default TableRow;