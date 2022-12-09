import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} className={inter.className} />;
};
export default App;
