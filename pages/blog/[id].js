import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Layout from "../../composants/Layout";

function Post({ post }) {
  //console.log("post json >> ", post);

  return (
    <>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.description}>{post.body}</p>
          <Link href="/">
            <a>Revenir vers accueil</a>
          </Link>
        </main>
      </Layout>
    </>
  );
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=4"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
/*
export async function getStaticProps({ params }) {
  try {
    console.log("static Props params : ", params.id);
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?${params.id}`
    ).then((r) => r.json());
    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log("Erreur : ", err);
    return {
      props: null,
    };
  }
}
*/

/*
export async function getStaticPaths() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=4"
  ).then((r) => r.json());
  console.log("params staticPath : ", posts);
  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}
*/
