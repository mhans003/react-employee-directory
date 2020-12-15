import axios from "axios";

//Export function that retrieves data using the limit to specify number of results retrieved.
export default {
    getEmployees: function(limit) {
        return axios.get(
            `https://randomuser.me/api/?results=${limit}`
        );
    }
};


