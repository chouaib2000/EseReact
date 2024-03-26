export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, {name}!</p>
            {age > 18 && <Age age={age} />}
            {!!age && <Age age={age} />}
            {age > 18 && age < 65 && < Age age={age} />}
            {age > 18 && age < 65 && name === "John" && <Age age={age} />}
            {!!age && <Age age={age} />}
        </div>
    )
}
export function Age({ age }) {
    return <p>Your age is {age}</p>
}