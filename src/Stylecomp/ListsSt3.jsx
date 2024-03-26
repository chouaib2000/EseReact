import { useState } from "react"

export function TodoList() {
    const [todos, setTodos] = useState([])
    function addTodo(event) {
        event.preventDefault()
        const todo = event.target.elements.todo.value
        setTodos((todos) => [...todos, todo])
        event.target.elements.todo.value = ''
    }
    function clearTodos() {
        setTodos([])
    }
    function removeTodo(index) {
        setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
    }
    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" name='todo' />
                <button type="submit">Add</button>
                <button type="reset" onClick={clearTodos} >Reset</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <li>{todo}</li>
                        <button onClick={() => removeTodo(index)} >Remove</button>
                    </div>
                ))}

            </ul>
        </>
    )
}