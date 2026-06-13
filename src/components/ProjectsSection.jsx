import React from "react";
import goldImg from "../assets/gold.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";

function ProjectsSection() {
  return (
    <section style={styles.projects}>
      
      {/* TOP CENTER TITLE */}
      <div style={styles.header}>
        <div style={styles.line}></div>
        <p style={styles.label}>OUR CASES</p>
        <div style={styles.line}></div>
      </div>

      {/* CONTENT (LEFT + RIGHT) */}
      <div style={styles.content}>

        {/* LEFT SIDE */}
        <div style={styles.left}>
          <h2 style={styles.title}>LUXURY GOLD</h2>

          <p style={styles.desc}>
            A premium e-commerce platform designed for showcasing gold, diamond,
            and bridal collections with a modern and elegant interface.
            Built to deliver a seamless shopping experience with secure checkout,
            fast performance, and intuitive navigation for users.
          </p>
          <div style={styles.icons}>
  <FaReact style={{ color: "#61DBFB" }} />     
  <SiFlutter style={{ color: "#02569B" }} />  
  <SiMongodb style={{ color: "#47A248" }} /> 
  <FaNodeJs style={{ color: "#68A063" }} />   
</div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div style={styles.right}>
          <img src={goldImg} alt="gold" style={styles.image} />
        </div>

      </div>

    </section>
  );
}

const styles = {
  projects: {
    padding: "80px 8%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "60px",
  },

  label: {
    color: "#121313",
    fontSize: "32px",
    fontWeight: "600",
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: 0,
  },

  line: {
    width: "100px",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #171818, transparent)",
  },

  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    padding: "50px",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  icons: {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
  fontSize: "38px",
},

  image: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
     marginTop: "-110px"
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#04295e",
  },

  desc: {
    fontSize: "15px",
    lineHeight: "1.8",
    color: "#475569",
  },
};

export default ProjectsSection;