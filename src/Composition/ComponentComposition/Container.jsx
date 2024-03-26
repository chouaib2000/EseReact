import { useState } from "react"
export function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false)
    function handleToggleCollapse() {
        setCollapsed(col => !col)
    }
    return (
        <div style={{ backgroundColor: 'white', border: '5px solid red' }}>
            <div>{title}<button onClick={handleToggleCollapse}>Toggle</button></div>
            {!collapsed && <div>{children}</div>}
        </div>
    )
}