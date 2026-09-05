import React from "react";
import goldImg from "../assets/gold.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";

function ProjectsSection() {
  return (
    <>
      <style>{`
        /* ================================
           PROJECTS - TABLET
        ================================= */

        @media (max-width: 900px) {
          .projects-section {
            padding: 70px 6% !important;
            min-height: auto !important;
          }

          .projects-header {
            margin-bottom: 40px !important;
          }

          .projects-label {
            font-size: 26px !important;
          }

          .projects-line {
            width: 70px !important;
          }

          .projects-content {
            padding: 30px !important;
            gap: 35px !important;
          }

          .projects-image {
            margin-top: 0 !important;
          }
        }


        /* ================================
           PROJECTS - MOBILE
        ================================= */

        @media (max-width: 600px) {
          .projects-section {
            padding: 60px 20px !important;
            min-height: auto !important;
          }

          .projects-header {
            gap: 10px !important;
            margin-bottom: 35px !important;
          }

          .projects-label {
            font-size: 22px !important;
            letter-spacing: 2px !important;
            white-space: nowrap;
          }

          .projects-line {
            width: 35px !important;
            height: 1px !important;
          }

          .projects-content {
            flex-direction: column !important;
            padding: 0 !important;
            gap: 35px !important;
            align-items: stretch !important;
          }

          .projects-left {
            width: 100% !important;
          }

          .projects-right {
            width: 100% !important;
          }

          .projects-title {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }

          .projects-desc {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          .projects-icons {
            gap: 16px !important;
            font-size: 32px !important;
            margin-top: 18px !important;
          }

          .projects-image {
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 0 !important;
            border-radius: 10px !important;
          }
        }


        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 400px) {
          .projects-section {
            padding: 50px 16px !important;
          }

          .projects-header {
            gap: 7px !important;
          }

          .projects-label {
            font-size: 19px !important;
            letter-spacing: 1.5px !important;
          }

          .projects-line {
            width: 25px !important;
          }

          .projects-title {
            font-size: 22px !important;
          }

          .projects-desc {
            font-size: 13.5px !important;
          }

          .projects-icons {
            font-size: 29px !important;
            gap: 13px !important;
          }
        }
      `}</style>

      <section className="projects-section" style={styles.projects}>
        
        {/* TOP CENTER TITLE */}
        <div className="projects-header" style={styles.header}>
          <div className="projects-line" style={styles.line}></div>

          <p className="projects-label" style={styles.label}>
            OUR CASES
          </p>

          <div className="projects-line" style={styles.line}></div>
        </div>

        {/* CONTENT */}
        <div className="projects-content" style={styles.content}>

          {/* LEFT SIDE */}
          <div className="projects-left" style={styles.left}>
            <h2 className="projects-title" style={styles.title}>
              LUXURY GOLD
            </h2>

            <p className="projects-desc" style={styles.desc}>
              A premium e-commerce platform designed for showcasing gold,
              diamond, and bridal collections with a modern and elegant
              interface. Built to deliver a seamless shopping experience
              with secure checkout, fast performance, and intuitive
              navigation for users.
            </p>

            <div className="projects-icons" style={styles.icons}>
              <FaReact style={{ color: "#61DBFB" }} />
              <SiFlutter style={{ color: "#02569B" }} />
              <SiMongodb style={{ color: "#47A248" }} />
              <FaNodeJs style={{ color: "#68A063" }} />
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="projects-right" style={styles.right}>
            <img
              src={goldImg}
              alt="gold"
              className="projects-image"
              style={styles.image}
            />
          </div>

        </div>
      </section>
    </>
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
    background:
      "linear-gradient(90deg, transparent, #171818, transparent)",
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
    marginTop: "-110px",
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