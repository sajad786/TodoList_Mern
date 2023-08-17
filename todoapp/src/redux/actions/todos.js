import axios from "axios"
import { API_BASE_URL } from "../../config/urls"
import store from "../store"
import actionsTypes from "../actionsTypes"
const { dispatch } = store

export const getAllTodos = async () => {
    try {
        let apidata = `${API_BASE_URL}/todos`

        let res = await axios.get(apidata)
        console.log(res, "apidataa")
        dispatch({
            type: actionsTypes.GET_ALL_TODOS,
            payload: res?.data,
        })
    } catch (error) {
        console.log(error, 'error while getting todos')
    }
}



export const addTodo = async (data) => {
    try {
        let res = await axios.post(`${API_BASE_URL}/todos`, { data })
        dispatch({
            type: actionsTypes.GET_ALL_TODOS,
            payload: res?.data,
        })
        return res
    } catch (error) {
        console.log(error, 'error while adding todos')
        return error
    }
}

export const updateTodo = (id, data) => {
    return new Promise((resolve, reject) => {
        axios.put(`${API_BASE_URL}/todos/${id}`, {data}).then(res => {
            dispatch({
                type: actionsTypes.UPDATE_TODO,
                payload: res?.data
            })
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`${API_BASE_URL}/todos/${id}`).then(res => {
            console.log(res, "resdeleteatactions")
            dispatch({
                type: actionsTypes.DELETE_TODO,
                payload: res?.data
            })
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const toggleTodo = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_BASE_URL}/todos/${id}`).then(res => {
            // dispatch({
            //     type: actionsTypes.TOGGLE_TODO,
            //     payload: res?.data
            // })
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}