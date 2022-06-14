import Head from "next/head";

const Heads = ({ title }) => {
  return (
    <Head>
      <title>Ninja List | {title}</title>
      <meta name="keywords" content="ninjas" />
    </Head>
  );
};

export default Heads;
