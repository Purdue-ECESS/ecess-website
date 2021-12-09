import React, {useEffect, useState} from "react";

export function SparkIndex() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div
                style={{height: "calc(100vh - 69px)", width: "100%"}}/>
        )
    }

    return (
        <iframe title={"spark"}
                loading="lazy"
                src={"https://purdue-ecess.github.io/spark-website/"}
                frameBorder={0}
                style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
    )

}