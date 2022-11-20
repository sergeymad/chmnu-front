import React from "react";
import styles from "./index.module.scss";
import {Button, Carousel, RightColumn} from "@components/scss";


export const Main: React.FC = () => {
    return (

    <div>
        <Carousel/>
        <div className={styles.information}>
            <div className={["wrapper", "title_wrap"].join(" ")}>
                <div className="title">
                    Інформація
                    та контакти
                </div>
            </div>
            <div className="wrapper">
                <div className={styles.buttons}>
                    <a href="#" className={styles.button}>Абітурієнту</a>
                    <a href="#" className={styles.button}>Студенту</a>
                    <a href="#" className={styles.button}>Наука</a>
                    <div className={[styles.wrapper, styles.phone_wrap].join(" ")}>
                        <a href="#">(0512) 500 333</a>
                        <a href="#">(0512) 765 567</a>
                    </div>
                    <div className={[styles.socials, styles.wrapper].join(" ")}>
                        <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-telegram" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
                        <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"/></a>
                    </div>
                </div>
                <div className={styles.image} style={{
                    backgroundImage: "url(./images/src/university.jpg)",
                }}></div>
            </div>
        </div>
    </div>


)
    ;
};
