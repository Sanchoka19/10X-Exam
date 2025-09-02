import { useState, useEffect } from "react";

function DigitalCountdown({ initialSeconds }) {
    const storedTime = localStorage.getItem("countdownTime");
    const [timeLeft, setTimeLeft] = useState(
        storedTime ? parseInt(storedTime, 10) : initialSeconds
    );

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = prev - 1;
                localStorage.setItem("countdownTime", newTime); // შენახვა localStorage-ში
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const days = String(Math.floor(timeLeft / (24 * 3600))).padStart(2, "0");
    const hours = String(Math.floor((timeLeft % (24 * 3600)) / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");

    const blockStyle = "bg-white rounded-lg shadow-md p-4 text-center font-mono text-5xl";

    return (
        <div className="flex flex-col items-start gap-8">
            <div className="flex gap-7">
                <div className={blockStyle}>
                    {days}<div className="text-3xl mt-1">Days</div>
                </div>
                <div className={blockStyle}>
                    {hours}<div className="text-3xl mt-1">Hr</div>
                </div>
                <div className={blockStyle}>
                    {minutes}<div className="text-3xl mt-1">Mins</div>
                </div>
                <div className={blockStyle}>
                    {seconds}<div className="text-3xl mt-1">Sec</div>
                </div>
            </div>
        </div>
    );
}

export default DigitalCountdown;
