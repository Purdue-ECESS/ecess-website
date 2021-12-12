
// https://stackoverflow.com/questions/39092859/get-dimensions-of-image-with-react/
import React from "react";

type ImageLoaderProp = {
    style?: any,
    height: number,
    width: number | "100%",
    src: string
}

type ImageLoaderState = {
    dimensions: {
        width?: number| "100%",
        height?: number
    }
}

export class ImageLoader extends React.Component<ImageLoaderProp, ImageLoaderState> {
    constructor(props: ImageLoaderProp) {
        super(props);
        this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        this.setState({dimensions:{height:0,
                width:0}});
    }
    render(){
        const {src, width, height, style} = this.props;
        return (
            <div
                style={{
                    ...style,
                    width: width,
                    height: height,
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
        );
    }

}