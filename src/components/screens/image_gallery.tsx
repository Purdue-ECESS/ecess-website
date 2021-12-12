import {ImageList, ImageListItem} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {delay} from "q";
import {WelcomeImage} from "./welcome";

function Background(photos) {
    const { innerWidth: width} = window;
    const maxSize = photos.length - (photos.length % 4);
    const background_photos = photos.slice(0, maxSize);
    return (
        <div style={{maxHeight: "80vh", overflow: "hidden"}}>
            <ImageList rowHeight={width / 16 * 2 } cols={4}>
                {
                    (background_photos || []).map((item, i) =>
                        (<ImageListItem key={`background-${item.photo}-${i}`} cols={1}>
                            <img
                                style={
                                    item.opacity === 0 ? {opacity: 0, transition: "opacity 0.5s"}:
                                        item.opacity === 1 ? {opacity: 1, transition: "opacity 0.5s"}: {opacity: 0}
                                }
                                src={process.env.PUBLIC_URL + item.photo} alt={'head-shots'} />
                        </ImageListItem>)
                    )
                }
            </ImageList>
        </div>
    )
}


export function ImageGallery({photos: userPhotos, children}) {

    const [photos, setPhotos] = useState(
        userPhotos
    );

    const changeImage = async (idx, photo) => {
        photos[idx].opacity = 0;
        setPhotos([...photos]);
        await delay(500);
        photos[idx] = photo;
        photos[idx].opacity = 2;
        setPhotos([...photos]);
        photos[idx].opacity = 1;
        setPhotos([...photos]);
        await delay(500);
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            const maxSize = photos.length - (photos.length % 4);
            const idx1 = Math.floor(Math.random() * (maxSize));
            const idx2 = Math.floor(Math.random() * (maxSize));
            const photo1 = {...photos[idx1]};
            const photo2 = {...photos[idx2]};
            await changeImage(idx1, photo2);
            await changeImage(idx2, photo1);
        }, 2000);
        return () => clearInterval(interval);

    });
    return (<>
        <WelcomeImage
            width={"100%"}
            background={Background(photos)}>
            {children}
        </WelcomeImage>
    </>)
}