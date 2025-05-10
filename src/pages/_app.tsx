
import '../styles/global.css';
import '../styles/theme.css';
import { CSSProperties } from 'react';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
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
  return (
    <main className={poppins.className}>
      <div style={containerStyle}>
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
}

export default MyApp;