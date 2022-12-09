import Head from "next/head";
import CalendarInput from "../components/Calendar/Input/CalendarInput";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DatePicker Component</title>
        <meta name="description" content="DatePicker Custom Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CalendarInput />
      </main>
    </div>
  );
};
export default Home;
