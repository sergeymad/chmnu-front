import React from "react";
import styles from "./index.module.scss";
import { Button,Carousel } from "@components/scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

export const RightColumn: React.FC = () => {
  return (
      <div className={styles.right}>
          <div className={styles.title_wrap}>
              <div className={styles.title}>
                  Новини
              </div>
          </div>
          <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              pagination={{clickable: true}}
              direction="vertical"
              className={[styles.swiper,styles.swiper_news].join(" ")}
          >
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                  <div className={styles.wrapper}>
                      <div className={styles.info}>
                          <div className="text">ТРК “Март”:
                              Могилянка готується
                              до навчального року
                          </div>
                          <div className={styles.date}>10.08.2022</div>

                      </div>
                      <div className={styles.image} style={{
                          backgroundImage: "url(./images/src/university.jpg)",
                      }}/>
                  </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                      <div className={styles.wrapper}>
                          <div className={styles.info}>
                              <div className="text">ТРК “Март”:
                                  Могилянка готується
                                  до навчального року
                              </div>
                              <div className={styles.date}>10.08.2022</div>

                          </div>
                          <div className={styles.image} style={{
                              backgroundImage: "url(./images/src/university.jpg)",
                          }}/>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                      <div className={styles.wrapper}>
                          <div className={styles.info}>
                              <div className="text">ТРК “Март”:
                                  Могилянка готується
                                  до навчального року
                              </div>
                              <div className={styles.date}>10.08.2022</div>

                          </div>
                          <div className={styles.image} style={{
                              backgroundImage: "url(./images/src/university.jpg)",
                          }}/>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                      <div className={styles.wrapper}>
                          <div className={styles.info}>
                              <div className="text">ТРК “Март”:
                                  Могилянка готується
                                  до навчального року
                              </div>
                              <div className={styles.date}>10.08.2022</div>

                          </div>
                          <div className={styles.image} style={{
                              backgroundImage: "url(./images/src/university.jpg)",
                          }}/>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>

          <div className={styles.title_wrap}>
              <div className={styles.title}>
                  Події та оголошення
              </div>
          </div>
          <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={2}
              pagination={{clickable: true}}
              direction="vertical"
              className={[styles.swiper,styles.swiper_dates].join(" ")}
          >
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                  <div className={styles.wrapper}>
                      <div className={styles.info}>
                          <div className="text">ТРК “Март”:
                              Могилянка готується
                              до навчального року
                          </div>
                          <div className="date">10.08.2022</div>

                      </div>
                      <div className={styles.date}>
                          <div className={styles.day}>22</div>
                          <div className={styles.month}>Жовтня</div>
                      </div>
                  </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                      <div className={styles.wrapper}>
                          <div className={styles.info}>
                              <div className="text">ТРК “Март”:
                                  Могилянка готується
                                  до навчального року
                              </div>
                              <div className="date">10.08.2022</div>

                          </div>
                          <div className={styles.date}>
                              <div className={styles.day}>22</div>
                              <div className={styles.month}>Жовтня</div>
                          </div>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className={styles.swiper_slide}>
                      <div className={styles.wrapper}>
                          <div className={styles.info}>
                              <div className="text">ТРК “Март”:
                                  Могилянка готується
                                  до навчального року
                              </div>
                              <div className="date">10.08.2022</div>

                          </div>
                          <div className={styles.date}>
                              <div className={styles.day}>22</div>
                              <div className={styles.month}>Жовтня</div>
                          </div>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>

      </div>
  );
};
