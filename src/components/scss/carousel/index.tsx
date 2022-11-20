import React from "react";
import styles from "./index.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

export const Carousel: React.FC = () => {
    return (

        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            className={[styles.swiper,styles.swiper_main].join(" ")}
        >
            <SwiperSlide>
                <div className={styles.main_carousel_item} style={{
                    backgroundImage: "url(./images/src/university.jpg)",
                }}>
                    <div className={styles.text}>
                        <div className={styles.title}>Запрошуємо
                            на навчання
                        </div>
                        <div className={styles.subtitle}>в 2022 році</div>
                        <div className={styles.watermark}>
                            <img src="./images/src/Vector.png" alt="BSNU logo"/>
                            <a href="#" className="number">0512 500 333</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.main_carousel_item} style={{
                    backgroundImage: "url(./images/src/university.jpg)",
                }}>
                    <div className={styles.text}>
                        <div className={styles.title}>Запрошуємо
                            на навчання
                        </div>
                        <div className={styles.subtitle}>в 2022 році</div>
                        <div className={styles.watermark}>
                            <img src="./images/src/Vector.png" alt="BSNU logo"/>
                            <a href="#" className="number">0512 500 333</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.main_carousel_item} style={{
                    backgroundImage: "url(./images/src/university.jpg)",
                }}>
                    <div className={styles.text}>
                        <div className={styles.title}>Запрошуємо
                            на навчання
                        </div>
                        <div className={styles.subtitle}>в 2022 році</div>
                        <div className={styles.watermark}>
                            <img src="./images/src/Vector.png" alt="BSNU logo"/>
                            <a href="#" className="number">0512 500 333</a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
