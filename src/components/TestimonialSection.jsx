import mithuImg from "../assets/mithu.png";

const TestimonialSection = () => {
  return (
    <div id="testimonial" style={styles.wrapper}>
      <h2 style={styles.title}>Clients Say We Deliver</h2>

      <div style={styles.card}>
        <img src={mithuImg} alt="Mithu" style={styles.avatar} />
        <h4 style={styles.name}>Muthu</h4>
        <p style={styles.role}>CEO, ISM DATA</p>

        <p style={styles.text}>
          "In a short period, Hibuz created a website for our UK-based jewellery store 
          to showcase capability & attract potential clients"
        </p>

        
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "100px 60px",
    background: "#ffffff",
    textAlign: "center",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#04295e",
  },

  card: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "16px",
    background: "#f8fafc",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#475569",
    marginBottom: "15px",
  },

  name: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#04295e",
    margin: "0",
  },

  role: {
    fontSize: "13px",
    color: "#64748b",
    marginTop: "4px",
  },
};

export default TestimonialSection;