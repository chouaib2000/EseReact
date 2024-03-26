import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"
export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
    const [counter, setCounter] = useState(initialValue)
    const directionRef = useRef(null);

    useEffect(() => {
        if (counter > initialValue) {
            directionRef.current = "up";
        } else if (counter < initialValue) {
            directionRef.current = "down";
        }
    }, [counter, initialValue]);

    const prevDirectionRef = useRef(null);
    useEffect(() => {
        if (directionRef.current !== prevDirectionRef.current) {
            console.log("Direction changed:", directionRef.current);
            prevDirectionRef.current = directionRef.current;
        }
    }, [counter]);
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