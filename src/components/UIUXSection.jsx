const UIUXSection = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        
        <h2 style={styles.title}>
          #1 in UI/UX Design
        </h2>

        <p style={styles.desc}>
          We craft intuitive, user-centered digital experiences that not only look stunning 
          but also drive real business results. Our design approach focuses on clarity, 
          usability, and modern aesthetics to help your product stand out in the market.
        </p>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    padding: "100px 60px",
    background: "#000000", // 👈 black background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    maxWidth: "900px",
    textAlign: "center",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#ffffff", // 👈 white text
    marginBottom: "20px",
  },

  desc: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#cbd5f5", // 👈 soft light color (not pure white)
  },
};
export default UIUXSection;