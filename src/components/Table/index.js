import TableHead from "../TableHead";
import TableBody from "../TableBody";

function Table(props) {
    console.log(props.data);

    return (
        <table className="table">
            <TableHead />
            <TableBody data={props.data} />
        </table>
    );
}

export default Table;