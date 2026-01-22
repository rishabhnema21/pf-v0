"use client"

import { useEffect, useState } from "react"

const Timer = () => {

    const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

  return (
    <span className="text-zinc-600 opacity-70 text-xs md:text-sm dark:text-zinc-200">{time}</span>
  )
}

export default Timer