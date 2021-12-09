import React, {useEffect, useState} from "react";

export function SparkSchedule() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <div style={{height: "calc(100vh - 69px)", width: "100%"}}/>
    }
    return (
        <iframe title={"spark schedule"}
                src={"https://purdue-ecess.github.io/spark-website/interactive-schedule/"}
                style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
    );
}