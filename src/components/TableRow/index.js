function TableRow(props) {
    if(props.isThead) {
        return (
            <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
        );
    } else {
        return (
            <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
            </tr>
        )
    }
}

export default TableRow;