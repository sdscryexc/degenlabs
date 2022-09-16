import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>DEGENBOTS WAR INTERFACE</title>
        <meta
          name="description"
          content="WAR INTERFACE"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
