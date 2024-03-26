import { LanguageContext } from './LanguageContext.jsx'
import { Clock } from './Clock.jsx'
import { useState } from 'react'
export function App() {
    const [language, setLanguage] = useState('en')
    function handleSetLanguage(event) {
        const language = event.target.value
        setLanguage(language)
    }
    return (
        <div>
            <LanguageContext.Provider value={language}>
                <Clock />
                <select onChange={handleSetLanguage}>
                    <option value="en">EN</option>
                    <option value="it">IT</option>
                </select>
            </LanguageContext.Provider>
        </div>
    );
}