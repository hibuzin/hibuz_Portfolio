import RippleGrid from "./RippleGrid";
import phones from "../assets/phones2.png";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import techStack from "../assets/techicon.png"; 

const Hero = () => {
  return (
    <div id="home" style={styles.wrapper}>

      {/* BACKGROUND ANIMATION */}
      <div style={styles.bg}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#045ea7"
          rippleIntensity={0.035}
          gridSize={8}
          gridThickness={18}
          glowIntensity={0.08}
          opacity={0.7}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
        />
      </div>

      {/* CONTENT */}
      <div style={styles.container}>
        <h1 style={styles.title}>WE DELIVER NEXT-GEN</h1>

        <h2 style={styles.subtitle}>
          WEB / MOBILE APPS
        </h2>

        <a href="#contact" style={styles.button}>
          Book a Call
        </a>

        {/*  PHONE IMAGE */}
        <img
          src={phones}
          alt="App preview"
          style={styles.phoneImage}
          className="phone-anim"
        />
      </div>
      <div style={styles.techSection}>

  {/* LEFT SIDE */}
  <div style={styles.techLeft}>
    <div style={styles.techText}>
      WE USE LATEST TECHNOLOGY
    </div>

    <div style={styles.techDesc}>
      {`Our Team with 7+ average years of experience crafting cutting-edge apps
will set your business apart with innovative approach and proven tracks
we’ll take your business to the next level.`}
    </div>
  </div>

  {/* RIGHT SIDE ICONS */}
  <div style={styles.techImageWrapper}>
  <img src={techStack} alt="Tech Stack" style={styles.techImage} />
</div>

</div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes floatPhone {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .phone-anim {
          animation: floatPhone 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "170vh",
    background: "#ffffff",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
  },
  techLeft: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "600px",

  marginLeft: "135px",
},
 techSection: {
  position: "absolute",
  bottom: "40px",   
  left: "0",
  width: "100%",

  display: "flex",
  justifyContent: "space-between", 
  alignItems: "flex-end",

  padding: "0 60px",
},
 techRow: {
  marginTop: "40px",
  width: "100%",
  maxWidth: "950px",
  paddingLeft: "60px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
},
techIcons: {
  display: "flex",
  gap: "18px",
  alignItems: "center",
},
icon: {
  width: "122px",   
  height: "122px",
  objectFit: "contain",
},


  bg: {
  position: "absolute",
  top: "18%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "35%",
  height: "35%",
  zIndex: 2,  
},

  container: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "80px",
  },

  techText: {
  marginTop: "40px",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "2px",
  color: "#083a80",
  textAlign: "left",


  display: "inline-block",  
  width: "fit-content",     

  paddingBottom: "8px",
  borderBottom: "2px solid #04295e",
},
techDesc: {
  marginTop: "10px",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  textAlign: "left",
  color: "#475569",
  lineHeight: "1.8",
  maxWidth: "650px",
  whiteSpace: "pre-line", 
},

  title: {
    fontSize: "56px",
    fontWeight: "700",
    margin: "0",
    letterSpacing: "1px",
  },

  subtitle: {
    fontSize: "56px",
    fontWeight: "600",
    margin: "10px 0 30px",
    background: "linear-gradient(90deg, #045ea7, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  button: {
    padding: "14px 28px",
    background: "linear-gradient(90deg, #042f52, #3b82f6)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "0.3s ease",
  },

  techImageWrapper: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

techImage: {

  width: "420px",   // 👈 adjust based on your design
  maxWidth: "100%",
  height: "auto",
   transform: "translateY(35px) translateX(-90px)", 
  objectFit: "contain",

},

  
  phoneImage: {
    marginTop: "50px",
    width: "950px",   
    maxWidth: "95%",
    left: "140%",
    height: "auto",
    zIndex: 2,
    transform: "scale(1.1)",
  },
};

export default Hero;