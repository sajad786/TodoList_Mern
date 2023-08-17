
import axios from 'axios'
import store from '../store'
import types from '../types'

const {dispatch} = store

const API_URL = 'http://localhost:3000'
// const API_URL = 'http://10.0.2.2:3000'
export const addNewTodo =  async (data) => {
    try{
       let res =  await axios.post(`${API_URL}/todos`, {data})
       dispatch({
        type:types.ADD_NEW_TODO,
        payload : res?.data
       })
    } catch(error) {
        console.log(error?.message ,"error while adding todo")
    }
}
export const getAllTodos =  async () => {
    try{
       let res =  await axios.get(`${API_URL}/todos`)
       dispatch({
        type:types.GET_ALL_TODO,
        payload : res?.data
       })
    } catch(error) {
        console.log(error?.message ,"error while getting all todos")
    }
}

export const toggleTodo =  async (id) => {
    try{
       let res =  await axios.get(`${API_URL}/todos/${id}`)
       dispatch({
        type:types.TOGGLE_TODO, 
        payload : res?.data
       })
    } catch(error) {
        console.log(error?.message ,"error while getting all todos")
    }
}


export const updateTodo = async (id, data)  => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ 
            type: types.UPDATE_TODO ,
             payload: res.data 
            });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTodo =  async (id)  => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ 
            type: types.DELETE_TODO , 
            payload: res.data 
        });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}


