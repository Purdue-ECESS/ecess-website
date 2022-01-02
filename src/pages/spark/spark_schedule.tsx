import React from "react";

export function SparkSchedule() {
    return (
        <div
            style={{overflow: "hidden"}}
        >
            <iframe title={"spark schedule"}
                    src={"https://purdue-ecess.github.io/spark-website/interactive-schedule/"}
                    style={{height: "calc(100vh - 69px)", overflow: "hidden"}} width={"100%"} />
        </div>
    );
}