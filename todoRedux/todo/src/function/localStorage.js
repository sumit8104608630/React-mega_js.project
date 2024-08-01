

const todo=useSelector(state=>state.todo)
const dispatch=useDispatch()
useEffect(()=>{
localStorage.setItem("task",JSON.stringify(todo))

},[todo])
console.log(todo)
dispatch(updateTodo(todo))