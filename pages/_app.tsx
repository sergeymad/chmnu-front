import React from "react";
import {AppProps} from "next/app";
import "@styles/global.scss";
import {QueryClient, QueryClientProvider} from "react-query";
import {Hydrate} from "react-query/hydration";
import '../styles/global.scss'
import {appWithTranslation} from "@i18n";
import {Header, Footer, RightColumn} from "@components/scss";
import styles from "@components/scss/main/index.module.scss";
import "pages/structure/index.scss";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <script src="https://use.fontawesome.com/818965c796.js"/>
                <Header/>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                        <Component {...pageProps} />
                        </div>
                        <RightColumn/>
                    </div>
                </div>
                <Footer/>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
