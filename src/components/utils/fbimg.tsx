import {ecessApiCall} from "../../utils/api";
import {useEffect, useState} from "react";

export function Fbimg(props) {
    const [src, setSrc] = useState(undefined);
    useEffect(() => {
        if (src === undefined) {
            ecessApiCall("/bucket", undefined, {image: props.src}).then((response: any) => {
                if (response?.image || undefined) {
                    setSrc(response.image);
                }
            });
        }
    })
    if (src) {
        return <img alt={"alt not set"} {...props} src={src} />
    }
    return (
        <></>
    )
}