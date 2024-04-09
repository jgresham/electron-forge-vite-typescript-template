import React, { useEffect, useState } from 'react';

export default function App() {
    const [sOsData, setOsData] = useState<string>('');

    useEffect(() => {
        window.preloadApiThing.getOsData().then((data) => {
            setOsData(JSON.stringify(data));
        });
    }, [])
    
    return (
        <div>
            <p>app</p>
            <p>os data: {sOsData}</p>
        </div>
    )
}