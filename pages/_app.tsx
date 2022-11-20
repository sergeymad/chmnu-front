import React from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
