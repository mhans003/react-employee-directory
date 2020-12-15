import TableRow from "../TableRow";

function TableBody(props) {
    return (
        <tbody>
            {props.data.map(person => {
                    console.log(person.name.first);
                    return (
                        <TableRow 
                            key={`${person.name.first} ${person.name.last}`}
                            firstName={person.name.first}
                            lastName={person.name.last}
                        />
                    );
                })}
        </tbody>
    );
}

export default TableBody;