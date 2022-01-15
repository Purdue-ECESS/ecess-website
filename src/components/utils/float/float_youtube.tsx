import {Float} from "./float";

export const FloatYoutube = (props) => {
    const {videoId, onClose} = props;
    return (
        <Float
            onClose={onClose}
            style={{
                width: "35vw",
                height: "40vh",
                bottom: "10px",
                right: "10px",
                zIndex: 2001,
            }}
        >
            <iframe
                width={"100%"}
                height={"90%"}
                title={"floating video"}
                src={`https://www.youtube.com/embed/${videoId || "tgbNymZ7vqY"}?autoplay=1`}>
            </iframe>
        </Float>
    )
}