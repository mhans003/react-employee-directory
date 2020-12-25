function Limit(props) {
    return (
        <div className="input-group input-group-lg">
            <select 
                onChange={props.handleLimitChange} 
                className="form-select form-control" 
                id="select-filter-field"
                aria-label="Input number of results to limit"
            >
                <option value="25">No. Results</option>
                <option value="25">25 Employees</option>
                <option value="50">50 Employees</option>
                <option value="100">100 Employees</option>
                <option value="500">500 Employees</option>
            </select>
        </div>
    );
}

export default Limit;