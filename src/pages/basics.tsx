import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Check Demon Status</title>
        <meta
          name="Degenlabs"
          content="Flex with your Demons"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
