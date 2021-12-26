import {ImageList, ImageListItem} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {delay} from "q";
import {WelcomeImage} from "./welcome";
import "src/styles/image_gallary.css";

export function ImageGallery({photos: userPhotos, children}) {
    const [photos, setPhotos] = useState(userPhotos);

    const { innerWidth: width, innerHeight: height} = window;

    const blockWidth = 150;
    const blockHeight = 150;

    const numImgHorizontal = Math.floor(width / blockWidth) + 1;
    const numImgVertical  = Math.floor(height / blockHeight) + 1;

    const numImgVisible = numImgHorizontal * numImgVertical;
    const maxSize = numImgVisible >= photos.length ? photos.length: numImgVisible;

    const changeImage = async (idx, photo) => {
        photos[idx].opacity = 0;
        setPhotos([...photos]);
        await delay(300);
        photos[idx] = photo;
        photos[idx].opacity = 2;
        setPhotos([...photos]);
        photos[idx].opacity = 1;
        setPhotos([...photos]);
        await delay(300);
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            const idx1 = Math.floor(Math.random() * (maxSize));
            const idx2 = maxSize + Math.floor(Math.random() * (photos.length - maxSize - 1));
            const photo1 = {...photos[idx1]};
            const photo2 = {...photos[idx2]};
            await changeImage(idx1, photo2);
            await changeImage(idx2, photo1);
        }, 1200);
        return () => clearInterval(interval);

    });
    return (<>
        <WelcomeImage
            width={"100%"}
            background={
                (
                    <div style={{maxHeight: "100vh", overflow: "hidden"}}>
                        <ImageList rowHeight={blockHeight} cols={numImgHorizontal}>
                            {
                                (photos.slice(0, maxSize) || []).map((item, i) =>
                                    (<ImageListItem key={`background-${item.photo}-${i}`} cols={1}>
                                        <img
                                            style={
                                                item.opacity === 0 ? {opacity: 0, transition: "opacity 0.5s"}:
                                                    item.opacity === 1 ? {opacity: 1, transition: "opacity 0.5s"}:
                                                        {opacity: 0}
                                            }
                                            src={item.link} alt={''} />
                                    </ImageListItem>)
                                )
                            }
                        </ImageList>
                    </div>
                )}
        >
            {children}
        </WelcomeImage>
    </>)
}
