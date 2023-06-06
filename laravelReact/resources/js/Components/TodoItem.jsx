import React from "react"
const TodoItem = ({item, index, deleteTodoItem, completeTodoItem, updateTodoItem}) => {
    return (
    <div>
        <ul>
            <li style={{textDecoration: item.complete? "line-through": ""}}>{item.todo}</li>
            <button onClick={() => completeTodoItem(index)}>Complete</button>
            <button onClick={() => updateTodoItem(index)}>Update</button>
            <button onClick={() => deleteTodoItem(index)}>X</button>
        </ul>
    </div>
    )}
export default TodoItem;
    