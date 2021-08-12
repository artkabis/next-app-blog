import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Layout from "../../composants/Layout";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({ productId, title }) {
  return (
    <>
      <Head>
        <title>{title} - My Clothing Store</title>
        <meta name="description" content={`Learn more about ${title}`} />
        <meta property="og:title" content={`${title} - My Clothing Store`} />
        <meta property="og:description" content={`Learn more about ${title}`} />
        <meta
          property="og:url"
          content={`https://myclothingstore.com/products/${productId}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>{title}</h1>
            <p>Product ID: {productId}</p>
            <Link href="/produits">
              <a className="returnLink">
                <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
                <p className="txtReturnLink">Revenir à la liste des produits</p>
              </a>
            </Link>
          </main>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
