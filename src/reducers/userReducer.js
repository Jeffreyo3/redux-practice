const initialState = {
    users: [
        {
            id: 0,
            name: "Doug"
        }
    ]
}

function reducer(state = initialState, action) {
    switch(action.type) {
        // case SOME_ACTION:
        //     do something       
        default: 
            return state; 
    }
}
export default reducer;
