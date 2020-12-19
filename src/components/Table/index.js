import TableHead from "../TableHead";
import TableBody from "../TableBody";

function Table(props) {
    return (
        <table className="table">
            <TableHead />
            <TableBody 
                handleEmployeeDataChange={props.handleEmployeeDataChange} 
                data={props.data} 
                handleModalShow={props.handleModalShow}
            />
        </table>
    );
}

export default Table;