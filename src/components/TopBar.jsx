import { FaPhone, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.right}>
        <span style={{ color: "#000", display: "flex", alignItems: "center" }}>
    <FaPhone style={{ color: "blue", marginRight: "6px" }} />
    +91 6369354390, +91 8124467616
  </span>

  <span
    style={{
      marginLeft: "20px",
      color: "#000",
      display: "flex",
      alignItems: "center",
    }}
  >
    <FaEnvelope style={{ color: "blue", marginRight: "6px" , }} />
    hibuzin@gmail.com
  </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#fcfbfb",
    color: "#fff",
    padding: "5px 20px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: "'Exo 2', sans-serif", 
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
};

export default TopBar;