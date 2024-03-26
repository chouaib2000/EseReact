import { useEffect, useState } from "react";
function useGithubUser() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    async function fetchGithubUser(username) {
        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            if (res.ok) {
                const data = await res.json()
                setUser(data)
            } else {
                throw new Error(res.statusText)
            }
        } catch (err) {
            setError(err.message)
        }
    }
    return {
        user: user,
        setGithubUser: fetchGithubUser,
        error: error
    }
}
export function GithubUser({ username }) {
    const { user, setGithubUser, error } = useGithubUser(null)

    useEffect(() => {
        setGithubUser(username)
    }, [setGithubUser, username])

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