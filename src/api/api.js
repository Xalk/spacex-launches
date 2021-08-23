import axios from "axios";


export let LaunchesAPI = {
    getLaunches(currentPage) {
        return axios.post("https://api.spacexdata.com/v5/launches/query", {
            "query": {},
            "options": {page: currentPage, limit: 18}
        }).then( d => d.data)
    }
}