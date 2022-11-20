import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";
import Link from 'next/link'
export const HumanList: React.FC = () => {
  return (
      <div>
          <div className="wrapper title_wrap">
              <div className="title">
                  Структура
                  Університету
              </div>

          </div>
          <div className={styles.human_list}>
              <div className={styles.item}>
                  <div className={styles.portrait} style={{
                      backgroundImage: "url(./images/src/klim.png)",
                  }}/>
                  <div className={styles.name}>Клименко
                      Леонід Павлович
                  </div>
                  <div className={styles.role}>Голова Вченої ради</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.portrait} style={{
                      backgroundImage: "url(./images/src/klim.png)",
                  }}/>
                  <div className={styles.name}>Клименко
                      Леонід Павлович
                  </div>
                  <div className={styles.role}>Голова Вченої ради</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.portrait} style={{
                      backgroundImage: "url(./images/src/klim.png)",
                  }}/>
                  <div className={styles.name}>Клименко
                      Леонід Павлович
                  </div>
                  <div className={styles.role}>Голова Вченої ради</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.portrait} style={{
                      backgroundImage: "url(./images/src/klim.png)",
                  }}/>
                  <div className={styles.name}>Клименко
                      Леонід Павлович
                  </div>
                  <div className={styles.role}>Голова Вченої ради</div>
              </div>
              <div className={styles.item}>
                  <div className={styles.portrait} style={{
                      backgroundImage: "url(./images/src/klim.png)",
                  }}/>
                  <div className={styles.name}>Клименко
                      Леонід Павлович
                  </div>
                  <div className={styles.role}>Голова Вченої ради</div>
              </div>

          </div>
      </div>

  );
};
