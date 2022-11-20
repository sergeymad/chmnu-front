import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";
import Link from 'next/link'
export const FacultiesList: React.FC = () => {
  return (
      <div>
          <div className="wrapper title_wrap">
              <div className="title">
                  Факультети
              </div>

          </div>
          <div className={styles.faculties_list}>
              <div className={styles.item}>
                  <div className={styles.image} style={{
                      backgroundImage: "url(./images/src/university.jpg)",
                  }}/>
                  <ul className="list">
                      <div className="wrapper title_wrap">
                          <div className="title">
                              Медичний факультет
                          </div>

                      </div>
                      <li><a href="#">Lorem ipsum dolor sit.</a></li>
                      <li><a href="#">A ducimus qui quo!</a></li>
                      <li><a href="#">Asperiores distinctio eveniet temporibus.</a></li>
                      <li><a href="#">Dolorem esse facere nostrum.</a></li>
                      <li><a href="#">Distinctio laborum nobis veritatis?</a></li>
                      <li><a href="#">Adipisci libero quas saepe?</a></li>
                      <li><a href="#">Deleniti eveniet labore magni?</a></li>
                      <li><a href="#">Commodi minus quasi quod!</a></li>
                  </ul>
              </div>
              <div className={styles.item}>
                  <div className={styles.image} style={{
                      backgroundImage: "url(./images/src/university.jpg)",
                  }}/>
                  <ul className="list">
                      <div className="wrapper title_wrap">
                          <div className="title">
                              Медичний факультет
                          </div>

                      </div>
                      <li><a href="#">Lorem ipsum dolor sit.</a></li>
                      <li><a href="#">A ducimus qui quo!</a></li>
                      <li><a href="#">Asperiores distinctio eveniet temporibus.</a></li>
                      <li><a href="#">Dolorem esse facere nostrum.</a></li>
                      <li><a href="#">Distinctio laborum nobis veritatis?</a></li>
                      <li><a href="#">Adipisci libero quas saepe?</a></li>
                      <li><a href="#">Deleniti eveniet labore magni?</a></li>
                      <li><a href="#">Commodi minus quasi quod!</a></li>
                  </ul>
              </div>
              <div className={styles.item}>
                  <div className={styles.image} style={{
                      backgroundImage: "url(./images/src/university.jpg)",
                  }}/>
                  <ul className="list">
                      <div className="wrapper title_wrap">
                          <div className="title">
                              Медичний факультет
                          </div>

                      </div>
                      <li><a href="#">Lorem ipsum dolor sit.</a></li>
                      <li><a href="#">A ducimus qui quo!</a></li>
                      <li><a href="#">Asperiores distinctio eveniet temporibus.</a></li>
                      <li><a href="#">Dolorem esse facere nostrum.</a></li>
                      <li><a href="#">Distinctio laborum nobis veritatis?</a></li>
                      <li><a href="#">Adipisci libero quas saepe?</a></li>
                      <li><a href="#">Deleniti eveniet labore magni?</a></li>
                      <li><a href="#">Commodi minus quasi quod!</a></li>
                  </ul>
              </div>
              <div className={styles.item}>
                  <div className={styles.image} style={{
                      backgroundImage: "url(./images/src/university.jpg)",
                  }}/>
                  <ul className="list">
                      <div className="wrapper title_wrap">
                          <div className="title">
                              Медичний факультет
                          </div>

                      </div>
                      <li><a href="#">Lorem ipsum dolor sit.</a></li>
                      <li><a href="#">A ducimus qui quo!</a></li>
                      <li><a href="#">Asperiores distinctio eveniet temporibus.</a></li>
                      <li><a href="#">Dolorem esse facere nostrum.</a></li>
                      <li><a href="#">Distinctio laborum nobis veritatis?</a></li>
                      <li><a href="#">Adipisci libero quas saepe?</a></li>
                      <li><a href="#">Deleniti eveniet labore magni?</a></li>
                      <li><a href="#">Commodi minus quasi quod!</a></li>
                  </ul>
              </div>

          </div>

      </div>

  );
};
