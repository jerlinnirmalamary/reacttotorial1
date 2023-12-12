import "../componets/Header.css";
import styles from "./header.module.css";

function Header() {
  const cssstyle = {
    color: "blue",
    backgroundColor: "lightpink",
    fontSize: "35px",
    padding: "10px",
    borderRadius: "20px",
    textalign: "Center",
  };
  return (
    <>
      {/* <h1 style={cssstyle}>Hello styling</h1> */}
      <h1 className={styles.bigBlue}>Hello styling</h1>
      <p className={styles.add}>Add a little style</p>
    </>
  );
}

export default Header;
