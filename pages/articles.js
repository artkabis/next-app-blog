import Link from "next/link";
import Layout from "../composants/Layout";
import { useState, useEffect } from "react";
import Fetch from "isomorphic-unfetch";

export default function Articles({ posts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      setCount((n) => n + 1),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Layout>
        <h1>Count {count}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <a>
                  <h3>
                    {post.id} - {post.title}
                  </h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
/*index.getStaticProps = async function () {
  const res = await Fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=4"
  );
  const data = await res.json();
  console.log(data);
  return {
    data: data,
  };
};
*/
export async function getStaticProps() {
  const posts = await Fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=4"
  ).then((r) => r.json());
  return {
    props: {
      posts,
    },
  };
}
