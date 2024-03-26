import { useState } from "react"
export function Login() {
    const [data, setData] = useState({ username: '', password: '', remember: false })

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

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handleInputChange} />
            <input type="password" name="password" value={data.password} onChange={handleInputChange} />
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
        </div>
    )
}