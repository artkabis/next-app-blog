import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navCounter">
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/ssq">
        <a>SSQ</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
