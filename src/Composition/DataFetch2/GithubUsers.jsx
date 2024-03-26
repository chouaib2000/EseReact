import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
    const [users, setUserName] = useState([])
    function handleUserInput(e) {
        e.preventDefault()
        const user = e.target.elements.username.value
        setUserName(users => [...users, user])
    }
    return (
        <div>
            <form onSubmit={handleUserInput} >
                <input type="text" name="username" />
                <button>Search</button>
            </form>
            <ul>
                {users && users.map((userName, index) => (
                    <li key={index} ><GithubUser username={userName} /></li>
                ))}
            </ul>
        </div>
    )
}