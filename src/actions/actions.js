import axios from 'axios';

export const getUsers = () => dispatch => {

    axios
        .get('https://cors-anywhere.herokuapp.com/https://jdo-user-post-api.herokuapp.com/api/users')
        .then(res => {
            console.log(res)
            // const action = {type: "GET_USERS", payload: res}
            dispatch({ type: "GET_USERS", payload: res.data })
        })
        .catch(err => console.log(`Error getting users: ${err}`));
}

export const submitUser = (nameObj) => dispatch => {

    axios.post('https://cors-anywhere.herokuapp.com/https://jdo-user-post-api.herokuapp.com/api/users', nameObj)
        .then(res => {
            dispatch({ type: "SUBMIT_USER", payload: res.data})
            // dispatch ({ type: "SUBMIT_USER", payload: {id: Date.now(), name: nameObj.name} })
        })
        .catch(err => console.log(`Error submitting user: ${err}`));
}