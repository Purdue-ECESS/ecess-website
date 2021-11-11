
// https://stackoverflow.com/questions/39092859/get-dimensions-of-image-with-react/
import React from "react";

type ImageLoaderProp = {
    style?: any,
    height: number,
    width: number,
    src: string
}

type ImageLoaderState = {
    dimensions: {
        width?: number,
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
        const {src, width, height} = this.props;
        return (
            <div
                style={{
                    width: width,
                    height: height,
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
        );
    }

}