import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"; // requires a loader

const HORIZONTAL_MEETINGS = [
    {'ref': '0bf270e223e98350b6770f4d1893e2f7.jpg'},
    {'ref': '6a656652329d2e88aa19b9b164de27d2.jpg'},
    {'ref': 'bec6f0aea811a44340b873cc7ce57e77.jpg'},
    {'ref': 'e7282ff2de26dd6e5176b2e6ca44d6b8.jpg'},
    {'ref': '1f20bbc7d9baad58653ad6b1ec2b43a9.jpg'},
    {'ref': '7db2a11d9389595c9f51c7e8a97668b0.jpg'},
    {'ref': 'f54caa40ea454855e8f6a0448173f63f.jpg'},
    {'ref': '26fa08f9c36cb813d8778bb19f83a7ae.jpg'},
    {'ref': 'cc7c44ff3d31623625564f403e188283.jpg'},
    {'ref': 'f915717ee4d52f70f92c2590efeee44f.jpg'},
    {'ref': '447cc5c569de3ac912d4bb408df4af65.jpg'},
    {'ref': '96d464123fa16923deecee14f22ee333.jpg'},
    {'ref': '4d5b0e835542d04b1615a6cec95aa1f8.jpg'},
    {'ref': 'a608146ee287fc344b5e734abcdb4fd7.jpg'},
];

const VERTICAL_MEETINGS = [
    {'ref': 'c521897d1c564271cf8157b15d97c2ca.jpg'},
    {'ref': '8c156a5166704ec4996c204db2ad0919.jpg'},
    {'ref': 'd8a55710b4e2a28bef61eeaadc961a74.jpg'},
    {'ref': 'db3e530d701893f51938d545ac0fb6de.jpg'}
]

export default function FunPage() {
    return (
        <div>
            <div style={{margin: '0 auto', maxWidth: 1080}}>
                <Carousel>
                    {HORIZONTAL_MEETINGS.map((item, i) => {
                            return (
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/static/src/" + item.ref} alt={'horizontal fun images'}/>
                                </div>
                            )
                        }
                    )}
                </Carousel>

                <Carousel>
                    {VERTICAL_MEETINGS.map((item, i) => {
                            return (
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/static/src/" + item.ref} alt={'vertical fun images'}/>
                                </div>
                            )
                        }
                    )}
                </Carousel>
            </div>
        </div>
    )
}

