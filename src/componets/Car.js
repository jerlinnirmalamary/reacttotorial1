function Car(props) {
  // const { sendbrand, colors } = props;
  const { carinfo1 } = props;
  const { brand, colors, price } = carinfo1;
  // const text = `Hi im a ${colors} color ${sendbrand} Car`;
  const text = `Hi im a ${colors} color ${brand} Car my price is ${price}`;
  return <h2 style={{ color: "red" }}>{text}</h2>;
}

export default Car;
