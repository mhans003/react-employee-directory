function TableRow(props) {
    if(props.isThead) {
        return (
            <tr>
                <th scope="col"><i class="fad fa-camera-alt"></i></th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            </tr>
        );
    } else {
        return (
            <tr>
                <td><img src={props.thumbnail}></img></td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
            </tr>
        )
    }
}

export default TableRow;