import Image from "next/image";

import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Container = ({ id, name, email }) => {
  return (
    <Link href={"/ninjas/" + id.toString()}>
      <div className="ninjaCont">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image src="/nindp.png" width={60} height={60} />
          <h1>{name}</h1>
        </div>
        <Link href={"mailto:" + email}>
          <a className="but">
            <h3 style={{ color: "#555" }}>{email}</h3>
          </a>
        </Link>
      </div>
    </Link>
  );
};

const Ninjas = ({ ninjas }) => {
  console.log(ninjas);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((i) => {
        return <Container key={i.id} id={i.id} name={i.name} email={i.email} />;
      })}
    </div>
  );
};

export default Ninjas;
