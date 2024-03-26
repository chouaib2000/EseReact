import { useState } from "react"
function setInitialValue() {
    return { username: '', password: '', remember: false }
}
export function Login() {
    const [data, setData] = useState(setInitialValue)

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }
    function resetButton() {
        setData(setInitialValue)
    }
    function handleLoginForm(event) {
        event.preventDefault()
        console.log(data)
    }
    return (
        <form onSubmit={handleLoginForm}>
            <input type="text" name="username" value={data.username} onChange={handleInputChange} />
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={resetButton}>Reset</button>
        </form>
    )
}