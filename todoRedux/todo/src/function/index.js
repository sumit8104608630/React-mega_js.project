import {createSlice,nanoid}from "@reduxjs/toolkit"
import { useEffect } from "react"
let arr=[];
const initialState={
    todo:[],
    loading:false,
    disable:true
}

// useEffect(()=>{

// }[])
console.log(initialState.todo)
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           // let allTask
            const obj={
                id:nanoid(),
                text:action.payload.text,
                disable:action.payload.disable||true,
            }
         // state.todo.push(obj)
        //  arr.push(obj)
          //  localStorage.setItem("task",JSON.stringify(arr))
            console.log(arr)
           state.todo.push(obj)
          console.log(state.todo)
          
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((item)=>item.id!=action.payload);
            console.log(state.todo)

        },
        updateTodo: (state, action) => {
                console.log({...action.payload})
            state.todo=state.todo.map((item)=>{
                if(item.id==action.payload.id){
                  return  {...item,...action.payload}
                }
                return item
            })
            console.log(state.todo)
        },
    }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;