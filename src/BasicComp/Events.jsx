export function AlertClock({ showClockBtn }) {
    return (
        <div>
            <p>Click the button below to show the currrent time</p>
            <button onClick={showClockBtn} >Click me!</button>
        </div>
    )
}

export function App() {
    function handleButtonClick() {
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }
    return <AlertClock showClockBtn={handleButtonClick} />
}