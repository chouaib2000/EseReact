import { useEffect, useState } from "react";

export function GithubUser({ username }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(data => setUser(data))
            .catch(error => setError(error))
    }, [username])
    return (
        <div>
            {user && (
                <>
                    <div>{user.login}</div>
                    <div>{user.name}</div>
                    <img src={user.avatar_url} />
                </>
            )}
            {error && <div>{error.message}</div>}
        </div>
    )
}