import actionsTypes from '../actionsTypes'
let initialState = {
    todos: []
}

export const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_TODO:
            console.log( action.payload , "adding todo ")
            return [...state.todos, action.payload]
        case actionsTypes.GET_ALL_TODOS:{
            console.log(action.payload ," payload at reducerss")
            state.todos = action.payload
            return [...state.todos]}
        case actionsTypes.DELETE_TODO :
            console.log(action.payload?._id ,"payloadID")
            
            let cloneArr = [state.todos]
            console.log(state.todos ,"cloneArrrr")
             state.todos = cloneArr.filter(i =>i?._id != action.payload?._id)
             return [...state.todos]
        default :
            return { ...state }
    }
}


// import types from "../actionsTypes";

// export const todosReducers = (state = [], action) => {
// switch (action.type) {

//     case types.ADD_TODO:
//         return[...state, action?.payload]
//     case types.GET_ALL_TODOS:
//         return action?.payload
//     default:
//         return state
// }
// }