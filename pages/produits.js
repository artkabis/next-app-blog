import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../composants/Layout";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <li key={index + 1}>
                <Link href={`/products/${index + 1}`}>
                  <a>
                    <h3>
                      {index + 1} - {`Produit ${index + 1}`}
                    </h3>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/">
            <a className="returnLink">
              <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
              <p className="txtReturnLink">Accueil</p>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}
