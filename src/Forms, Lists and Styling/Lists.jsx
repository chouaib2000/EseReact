function Color({ color }) {
    return <li>{color.name}</li>
}

export function Colors({ colors }) {
    return (
        <ul>
            {colors.map((color) => <Color key={color.id} color={color} />)}
        </ul>
    )
}