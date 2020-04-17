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
            <div className={styles.before} />
            <div className={styles['slider-container']}>
                <div className={styles['swiper-wrapper']}>
                    {bannerList.map((slider) => {
                        return (
                            <div className={styles['swiper-slide']} key={slider.imageUrl}>
                                <div className={styles['slider-nav']}>
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
                <div className={styles['swiper-pagination']} />
            </div>
        </div>
    );
}
