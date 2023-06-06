import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        if(value === ""){
        return console.log("Please add something to-do")
        }
        createTodoItem(value)
        setValue("")
        }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Control
        type="text"
        placeholder="Create todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="warning" onClick={handleSubmit}>Create</Button>
        </Form>
    )}
export default TodoInput