import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: {
      ninja: data,
    },
  };
};

const AddressComp = ({ street, suite, city, zip }) => {
  console.log(street);
  return (
    <div>
      <h5>{street} ,</h5>
      <h5>{suite} ,</h5>
      <h5>{city} ,</h5>
      <h5>{zip}</h5>
    </div>
  );
};
const Detail = (props) => {
  const ninja = props.ninja;
  return (
    <div>
      <h1>Details</h1>
      <div className="ninjaDet">
        <div>
          <Image src="/nindp.png" width={200} height={200} />
        </div>
        <div>
          <h1>{ninja.name}</h1>
          <h5 style={{ color: "#555" }}>{ninja.username}</h5>
          <h5 style={{ color: "#555" }}>{ninja.email}</h5>

          <AddressComp
            street={ninja.address.street}
            zip={ninja.address.zipcode}
            city={ninja.address.city}
            suite={ninja.address.suite}
          />
          <h5 style={{ color: "#555" }}>{ninja.phone}</h5>
          <h5 style={{ color: "#555" }}>{ninja.website}</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
