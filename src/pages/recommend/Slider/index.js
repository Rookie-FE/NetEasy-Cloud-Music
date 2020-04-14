import React from 'react';
import { Carousel } from 'antd';

export default function Slider(props) {
    const { bannerList } = props;
    return (
        <Carousel autoplay>
            {bannerList.map((slider) => {
                return (
                    <div className="swiper-slide" key={slider.imageUrl}>
                        <div className="slider-nav">
                            <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
}
