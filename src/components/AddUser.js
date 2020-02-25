import React, {useState} from 'react';
import { submitUser } from '../actions/actions';
import { connect } from 'react-redux'

const AddUser = props => {
    const [nameString, setNameString] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        // do an action with name
        props.submitUser({name: nameString})
    }

    const handleChange = e => {
        setNameString(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="user-name">New User: </label>
            <input id="user-name" 
                type="text" 
                placeholder="name" 
                onChange={handleChange} 
            />
            <button type="submit">submit</button>
        </form>
    )
}

// export default AddUser;
export default connect(null, {submitUser})(AddUser);