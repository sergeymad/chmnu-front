import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";
import Link from 'next/link'
export const ButtonsList: React.FC = () => {
  return (
      <div>
          <div className="wrapper title_wrap">
              <div className="title">
                  Інститути
                  та факультети
              </div>

          </div>
          <div className={["wrapper", styles.button_list].join(" ")}>
              <a href="#" className={styles.button}>Інститут державного управління</a>
              <a href="#" className={styles.button}>Факультет філології </a>
              <a href="#" className={styles.button}>Навчально-науковий центр «Школа журналістики»</a>
              <a href="#" className={styles.button}>Медичний інститут</a>
              <a href="#" className={styles.button}>Навчально-науковий інститут післядипломної освіти</a>
              <a href="#" className={styles.button}>Факультет економічних наук</a>
              <a href="#" className={styles.button}>Факультет комп’ютерних наук</a>
              <a href="#" className={styles.button}>Факультет політичних наук</a>
              <a href="#" className={styles.button}>Факультет фізичного виховання та спорту</a>
              <a href="#" className={styles.button}>Юридичний факультет </a>

          </div>
      </div>

  );
};
