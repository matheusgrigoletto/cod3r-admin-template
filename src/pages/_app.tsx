import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import { AppProvider } from "~data/context/AppContext";
import { AuthProvider } from "~data/context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Head>
          <title>Admin Template</title>
          <meta name="description" content="Admin template" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
export default MyApp;
