function Limit(props) {
    return (
        <div className="input-group input-group-lg">
            <span className="input-group-text" id="addon-limit">Limit</span>
            <input
                onChange={props.handleLimitChange}
                type="number" 
                min="1" 
                max="500" 
                className="form-control" 
                placeholder="25" 
                aria-label="Input number of results to limit" 
                aria-describedby="addon-limit"
            >
            </input>
        </div>
    );
}

export default Limit;