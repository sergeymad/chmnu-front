import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";
import Link from 'next/link'
export const LinksList: React.FC = () => {
  return (
      <div>
          <div className="wrapper title_wrap">
              <div className="title">
                  Відділи та служби
                  університету
              </div>

          </div>
          <ul className="list">
              <li><a href="#">
                  Бібліотека
              </a></li>
              <li><a href="#">
                  Бухгалтерія та планово-фінансовий відділ
              </a></li>
              <li><a href="#">
                  Відділ аспірантури
              </a></li>
              <li><a href="#">
                  Відділ безпеки життєдіяльності та цивільного захисту
              </a></li>
              <li><a href="#">
                  Відділ кадрів
              </a></li>
              <li><a href="#">
                  Відділ міжнародних зв’язків
              </a></li>
              <li><a href="#">
                  Вчена рада
              </a></li>
              <li><a href="#">
                  Галерея мистецтв
              </a></li>
              <li><a href="#">
                  Гуртожитки
              </a></li>
              <li><a href="#">
                  Експлуатаційно-технічний відділ
              </a></li>
              <li><a href="#">
                  Інформаційно-комп‘ютерний центр
              </a></li>
              <li><a href="#">
                  Канцелярія
              </a></li>
              <li><a href="#">
                  Медпункт
              </a></li>
              <li><a href="#">
                  Навчально-методичний відділ
              </a></li>
              <li><a href="#">
                  Науково-дослідна частина
              </a></li>
              <li><a href="#">
                  Підготовче відділення
              </a></li>
              <li><a href="#">
                  Приймальна комісія
              </a></li>
              <li><a href="#">
                  Профспілковий комітет
              </a></li>
              <li><a href="#">
                  Редакційно-видавничий відділ
              </a></li>
              <li><a href="#">
                  Спеціалізовані вчені ради
              </a></li>
              <li><a href="#">
                  Студентська колегія
              </a></li>
              <li><a href="#">
                  Харчовий комплекс
              </a></li>
              <li><a href="#">
                  Центр культури, мистецтв та зв’язків з громадськістю
              </a></li>
              <li><a href="#">
                  Юридичний відділ
              </a></li>


          </ul>
      </div>

  );
};
