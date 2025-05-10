
import '../styles/theme.css';
import '../styles/global.css';
import { CSSProperties } from 'react';
import Footer from "@/layouts/footer";
import "../styles/global.css";
import "../styles/theme.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navbar from "@/layouts/navbar";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const containerStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: "url('/backgroundLogin.jpg') no-repeat center center",
  backgroundSize: 'cover',
  position: 'relative',
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <main className={poppins.className}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >

          <Head>
            <title>BeloSpace</title>
          </Head>
          <div style={{ flex: 1 }}>
            <Component {...pageProps} />
            <ToastContainer />
          </div>

        </div>
      </main>
    </QueryClientProvider>
  );
}

export default MyApp;
