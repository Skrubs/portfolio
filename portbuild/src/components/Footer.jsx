import { useEffect, useState } from "react";

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <div style={{
                marginTop: '80vh',
                border: 'solid gold 2px',
                backgroundColor: 'darkslateblue',
                flex: 'auto',
                width: '40%',
                marginLeft: '30%',
                height: '14vh',
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <p>This is the footer. {currentDate.toLocaleString()}</p>
            </div>
        </>
    );
}
