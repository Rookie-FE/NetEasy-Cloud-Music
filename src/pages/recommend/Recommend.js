import React from 'react';
import Slider from './Slider';

export default function Recommend() {
    // mock 数据
    const bannerList = [1, 2, 3, 4].map(() => {
        return {
            imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
        };
    });
    return (
        <div>
            <div />
            <Slider bannerList={bannerList} />
        </div>
    );
}
