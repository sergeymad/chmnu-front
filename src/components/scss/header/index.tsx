import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/scss";
import Link from 'next/link'
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <div className="container">
            <div className="wrapper">
                <div className="logo">
                    <Link href="/">
                        <img src="./images/src/Vector.png" alt="BSNU logo"/>
                    </Link>
                </div>
                <div className={styles.info}>
                    <div className={styles.topline}>
                        <div className={styles.name}>Чорноморський Національний Університет ім. Петра Могили</div>
                        <div className={styles.lang}>
                            <a href="#" className={styles.item}> <img src="./images/src/Vector (1).png" alt="BSNU logo"/></a>
                            <a href="#" className={styles.item}> <img src="./images/src/Vector (2).png" alt="BSNU logo"/></a>
                        </div>
                        <div className={styles.search}>
                            <input type="text"/>
                                <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <ul className={[styles.bottomline,"wrapper"].join(" ")}>
                        <li className={styles.item}><Link href="/structure">Про університет</Link></li>
                        <li className={styles.item}><Link href="/faculties">Факультети</Link></li>
                        <li className={styles.item}><a href="#">Абітурієнту</a></li>
                        <li className={styles.item}><a href="#">Студенту</a></li>
                        <li className={styles.item}><a href="#">Наука</a></li>
                        <li className={styles.item}><a href="#">Міжнародні зв'язки</a></li>
                        <li className={styles.item}><a href="#">International students</a></li>
                        <li className={styles.item}><a href="#">Поліклініка ЧНУ</a></li>
                        <li className={styles.item}><Link href="/documents">Документи</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  );
};
