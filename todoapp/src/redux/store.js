import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todosReducers } from './reducers/todos'

const middleWare = [thunk]

const reducer = combineReducers({
    todos:todosReducers
})
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleWare)))

export default store;




// const middleWare = [thunk];

// export default createStore(reducer, applyMiddleware(...middleWare));


