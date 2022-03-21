import Head from "next/head";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button">
            <Link href="/">Home</Link>
          </button>
          <button className="navbar-toggler" type="button">
            <Link href="/blog/first-article">First-article</Link>
          </button>
          <button className="navbar-toggler" type="button">
            <Link href="/blog/second-article">Second-article</Link>
          </button>
        </nav>
        <article>{children}</article>
      </body>
    </div>
  );
};

export default Layout;
