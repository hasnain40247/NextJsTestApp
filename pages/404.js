import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="error">
      <div>
        <h1>Oops!</h1>
        <h4>We Can't Seem To Find The Page You're Looking For.</h4>
        <h5>Error Code: 404</h5>
        <h5>Here Are Some Links To Get You Back On Track</h5>
        <ul
          style={{
            paddingLeft: "16px",
          }}
        >
          <li>
            {" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/ninjas">
              <a>Ninja List</a>
            </Link>
          </li>
        </ul>
      </div>
      <img src="/error.png" />
    </div>
  );
};

export default NotFound;
