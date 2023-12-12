import Car from "./Car";
import Apple from "./Apple";
import App from "../App";

function Garage() {
  const isDooropened = true;

  //
  // const brand = "Ford";
  // const color = "black";
  //
  const carinfo = {
    brand: "Ford",
    colors: "red",
    price: 200000,
  };
  //
  // const carinfo = {};
  //
  // Apple info
  const Appleinfo = {
    brand: "Fuji",
    color: "red",
    price: 150,
  };
  // object type
  const carList = [
    {
      brand: "BMW",
      colors: "red",
      price: 100000,
    },
    {
      brand: "FORD",
      colors: "green",
      price: 210000,
    },
    {
      brand: "TESLA",
      colors: "black",
      price: 150000,
    },
  ];
  // Array type
  const numberList = [1, 2, 2, 3, 4, 4, 5, 5, 6];

  const show =
    carinfo.brand !== undefined &&
    carinfo.colors !== undefined &&
    carinfo.price;

  return (
    <>
      <h2>Who lives inside my garage...</h2>
      {/* <Car sendbrand={brand} colors="red" /> */}

      {show ? <Car carinfo1={carinfo} /> : null}
      <Apple Appleinfo1={Appleinfo} />
      <App />

      {isDooropened ? (
        <h2>Garage door is open</h2>
      ) : (
        <h2>Garage door is closed</h2>
      )}
      {/* OBJECT */}

      <ul>
        {carList.map((carinfo) => (
          <li key={carinfo.brand}>
            <Car carinfo1={carinfo} />
          </li>
        ))}
      </ul>

      {/* ARRAY */}

      <ul>
        {numberList.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </ul>
    </>
  );
}

export default Garage;
