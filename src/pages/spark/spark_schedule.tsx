import React from "react";

export function SparkSchedule() {
    return (
        <iframe title={"spark schedule"}
                src={"https://purdue-ecess.github.io/spark-website/interactive-schedule/"}
                style={{height: "calc(100vh - 69px)"}} width={"100%"}/>
    );
}