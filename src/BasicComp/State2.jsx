import { useState } from "react"
export function CounterDisplay({ counter }) {
    return <h2>This is a counter {counter}</h2>
}

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
    const [counter, setCounter] = useState(initialValue)
    function incrementCounter() {
        setCounter((c) => c + increment)
    }
    function decrementCounter() {
        setCounter((c) => c - decrement)
    }
    function resetCounter() {
        setCounter((c) => c = initialValue)
    }
    return (
        <div>
            <CounterDisplay counter={counter} />
            <button onClick={incrementCounter} >Increment</button>
            <button onClick={decrementCounter} >Decrement</button>
            <button onClick={resetCounter} >Reset</button>
        </div>
    )

}