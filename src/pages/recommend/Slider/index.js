import React, { useState, useEffect } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'swiper';
import styles from './slider.module.less';

export default function Slider(props) {
    const [sliderSwiper, setSliderSwiper] = useState(null);
    const { bannerList } = props;

    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            const newSliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: { el: '.swiper-pagination' },
            });
            setSliderSwiper(newSliderSwiper);
        }
    }, [bannerList.length, sliderSwiper]);

    return (
        <div className={styles.container}>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {bannerList.map((slider) => {
                        return (
                            <div className="swiper-slide" key={slider.imageUrl}>
                                <div className="slider-nav">
                                    <img
                                        src={slider.imageUrl}
                                        width="100%"
                                        height="100%"
                                        alt="推荐"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="swiper-pagination" />
            </div>
        </div>
    );
}
