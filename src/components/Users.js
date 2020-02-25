import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/actions'


const Users = (props) => {
    return(
        <div>
            <h2>Users:</h2>
            {/* map through users from props */}
            {props.users.map(user => {
                return <p key={user.id}>{user.name}</p>
            })}

            {/* gain access of getUsers action through connect via props */}
            <button onClick={()=> props.getUsers()}>Get Users</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {

        users: state.users,
        randomThing: "random"
    }
}
// export default Users;
export default connect(mapStateToProps, { getUsers })(Users)