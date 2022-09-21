import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Skullbots whale foundation</title>
        <meta
          name="description"
          content="Headquarter"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
