import { useState, useEffect } from 'react';

function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function getCurrentLocation() {
        setLoading(true)
        setError(null)
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                setLoading(false)
            },
            (error) => {
                setError(error)
                setLoading(false)
            }
        )
    }

    return { location, loading, error, getCurrentLocation }
}

export function CurrentPosition() {
    const { location, getCurrentLocation, error, loading } = useCurrentLocation(null)
    useEffect(() => getCurrentLocation(location), [getCurrentLocation, location])
    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {location && <h1>Latitude:{location.latitude}</h1>}
            {location && <h1>Longitude:{location.longitude}</h1>}
            {error && <h1>Error loading data</h1>}
        </div>
    )
}