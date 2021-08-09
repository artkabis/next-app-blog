import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../composants/Layout";

export default function Produits({ productId, title }) {
  return (
    <>
      <Head>
        <title>{title} - My Clothing Store</title>
        <meta name="description" content={`En savoir plus sur nos articles`} />
        <meta property="og:title" content={`Nos articles`} />
        <meta
          property="og:description"
          content={`En savoir plus sur ces articles`}
        />
        <meta
          property="og:url"
          content={`https://myclothingstore.com/produits/`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.container}>
          <ul>
            {[...new Array(5)].map((i, index) => (
              <li key={index}>
                <Link href={`/products/${index}`}>
                  <a>
                    <h3>
                      {index} - {`Produit ${index}`}
                    </h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
