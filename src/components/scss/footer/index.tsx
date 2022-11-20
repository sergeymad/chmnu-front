import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
  return (
      <div className={styles.footer}>
        <div className="container">
          <div className="wrapper">
            <div className={styles.info}>
              <div className={styles.title}>Petro Mohyla Black Sea National University</div>
              <div className={styles.subtitle}>З усіх питань, пов'язаних з роботою сайту і розміщенням інформації на сайті,
                контактуйте з редакцією або звертайтесь до кабінету 2-103
              </div>
            </div>
            <div className={styles.links}>
              <div className="wrapper">
                <a href="#">Домашня сторінка</a>
                <a href="#">Правила користування</a>
              </div>
              <div className={styles.certificates}>
                <div className={styles.item}><img src="./images/src/m 1.png" alt=""/></div>
                <div className={styles.item}><img src="./images/src/top200 1.png" alt=""/></div>
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.item}>вул. 68 Десантників 10, Миколаїв, Миколаївська область, 54000</div>
            <div className={styles.item}>Админістрація сайту: Погребченко Любов, Бущук Максим</div>
            <div className={styles.item}>Технічна підтримка: support@chmnu.edu.ua</div>
          </div>
        </div>
      </div>
  );
};
