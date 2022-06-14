import { AnimatePresence } from "framer-motion";
import { Head } from "next/document";
import Heads from "../comps/Head";
import Layout from "../comps/Layout";
import "../styles/globals.css";

function MyApp(props) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Heads
          title={
            props.Component.name.charAt(0).toUpperCase() +
            props.Component.name.slice(1)
          }
        />
        <props.Component {...props.pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
