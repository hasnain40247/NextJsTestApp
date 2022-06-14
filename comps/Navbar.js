import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="Logo">
        <img src="/ninja.png" height="60px" width="60px" />
        <h1>Ninja List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
