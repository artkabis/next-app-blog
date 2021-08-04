import Navbar from "./Navbar";
import Head from "next/head";
const Layout = (props) => (
  <>
    <Head>
      <title>Application pour Nextjs</title>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </>
);

export default Layout;
