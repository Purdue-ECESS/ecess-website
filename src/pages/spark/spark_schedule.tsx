import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

export function SparkSchedule() {
    const [mounted, setMounted] = useState(false);
    const isVisible = (useLocation().pathname || "").startsWith("/spark");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isVisible) {
        return <div style={{height: "calc(100vh - 69px)", width: "100%"}}/>
    }
    return (
        <iframe title={"spark schedule"}
                src={"https://purdue-ecess.github.io/spark-website/interactive-schedule/"}
                style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
    );
}