import {ADD_TODO,TOGGLE_TODO} from './actionTypes'
let nextId = 0
export const addTodo = (text) =>({
    type:ADD_TODO,
    id:nextId++,
    text
})
export const toogleTodo = (id) => ({
    type:TOGGLE_TODO,
    id
})
