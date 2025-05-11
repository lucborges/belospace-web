import Footer from "@/layouts/footer";
import "../styles/global.css";
import "../styles/theme.css";

import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navbar from "@/layouts/navbar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "@/stores/useAuthStore";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const setUserFromToken = useAuthStore((state) => state.setUserFromToken);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    setUserFromToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJpZCI6NCwic3ViIjoicHVjbWluYXNAZ21haWwuY29tIiwiaWF0IjoxNzQ2ODU0OTE2LCJleHAiOjE3NDY5NDEzMTZ9.QgW_vbu08dpitOM9HfLGoFdVzhS97rgBTOcTVAdY706bL44mlUEh8Ol_eZdgvUksTEv9291hxGoIb9ziBTBrLQ"
    );
    // }
  }, [setUserFromToken]);

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
          <Navbar />
          <Head>
            <title>BeloSpace</title>
          </Head>
          <div style={{ flex: 1 }}>
            <Component {...pageProps} />
            <ToastContainer />
          </div>
          <Footer />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default MyApp;
