import Link from "next/link";
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        Artkabis
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="link">
            {" "}
            <Link href={"/"}>
              <a>Accueil</a>
            </Link>
          </li>
          <li className="link">
            {" "}
            <Link href={"/articles"}>
              <a>Nos articles</a>
            </Link>
          </li>
          <li className="link">
            {" "}
            <Link href={"/produits"}>
              <a>Nos produits</a>
            </Link>
          </li>
          <li className="link">
            {" "}
            <Link href={"/about"}>
              <a>À propos</a>
            </Link>
          </li>
          <li className="link">
            {" "}
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
