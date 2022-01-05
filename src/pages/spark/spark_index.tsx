import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

export function SparkIndex() {
    const [mounted, setMounted] = useState(false);
    const isVisible = (useLocation().pathname || "").startsWith("/spark");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isVisible || !mounted) {
        return <div style={{height: "calc(100vh - 69px)", width: "100%"}}/>
    }

    return (
        <!-- TODO: Put Spark Website Code Here -->
        <iframe title={"spark"}
                loading="lazy"
                src={"https://purdue-ecess.github.io/spark-website/"}
                frameBorder={0}
                style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
    )

}
