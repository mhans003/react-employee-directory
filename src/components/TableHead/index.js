import TableRow from "../TableRow";

function TableHead(props) {
    return (
        <thead>
            <TableRow isThead={true} />
        </thead>
    );
}

export default TableHead;