import React from "react";

interface Props {
    key: any,
    window?: () => Window;
}

export default function IndexPage(props: Props) {
    return (
        <div>
            <p>Hi There</p>
        </div>
    )
}