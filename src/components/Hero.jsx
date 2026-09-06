import RippleGrid from "./RippleGrid";
import phones from "../assets/phones2.png";
import techStack from "../assets/techicon.png";



const Hero = () => {
  return (
    <>
      <style>{`



      
        /* =================================
           HERO - TABLET
        ================================= */

        @media (max-width: 900px) {

          .hero-wrapper {
            min-height: 120vh !important;
          }

          .hero-bg {
            top: 17% !important;
            width: 55% !important;
            height: 32% !important;
          }

          .hero-container {
            padding-top: 70px !important;
          }

          .hero-title {
            font-size: 44px !important;
          }

          .hero-subtitle {
            font-size: 44px !important;
          }

          .hero-phone {
            width: 850px !important;
            max-width: 95% !important;
            margin-top: 45px !important;
            transform: scale(1) !important;
          }

          .hero-tech-section {
            padding: 0 40px !important;
            bottom: 30px !important;
          }

          .hero-tech-left {
            margin-left: 0 !important;
            max-width: 520px !important;
          }

          .hero-tech-title {
            font-size: 18px !important;
          }

          .hero-tech-desc {
            font-size: 13px !important;
          }

          .hero-tech-image {
            width: 340px !important;
            transform: translateY(20px) translateX(-20px) !important;
          }
        }


        /* =================================
           HERO - MOBILE
        ================================= */

        @media (max-width: 600px) {

          .hero-wrapper {
            min-height: auto !important;
            padding-bottom: 50px !important;
          }

          .hero-bg {
            top: 13% !important;
            left: 50% !important;
            width: 85% !important;
            height: 30% !important;
          }

          .hero-container {
            padding-top: 55px !important;
            width: 100% !important;
             height: auto !important;
          }

          .hero-title {
            font-size: 30px !important;
            line-height: 1.2 !important;
            letter-spacing: 0 !important;
            padding: 0 15px !important;
          }

          .hero-subtitle {
            font-size: 30px !important;
            line-height: 1.2 !important;
            margin: 8px 0 24px !important;
          }

          .hero-button {
            padding: 12px 24px !important;
            font-size: 13px !important;
          }

          .hero-phone {
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 35px !important;
            transform: scale(1) !important;
          }


          /* TECH SECTION */

          .hero-tech-section {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;

            width: 100% !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;

             padding: 0 20px !important;
            gap: 25px !important;
          }

          .hero-tech-left {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            gap: 10px !important;
          }

          .hero-tech-title {
            font-size: 18px !important;
            letter-spacing: 1.5px !important;
            text-align: center !important;
            align-self: center !important;
            padding-bottom: 6px !important;
          }

          .hero-tech-desc {
            font-size: 13px !important;
            line-height: 1.7 !important;
            text-align: center !important;
            max-width: 100% !important;
          }

          .hero-tech-image-wrapper {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          .hero-tech-image {
            width: 300px !important;
            max-width: 90% !important;
            transform: none !important;
          }
        }


        /* =================================
           HERO - SMALL MOBILE
        ================================= */

        @media (max-width: 400px) {

          .hero-wrapper {
            padding-bottom: 40px !important;
          }

          .hero-container {
            padding-top: 45px !important;
          }

          .hero-title {
            font-size: 26px !important;
          }

          .hero-subtitle {
            font-size: 26px !important;
          }

          .hero-button {
            padding: 11px 22px !important;
            font-size: 12px !important;
          }

          .hero-phone {
            margin-top: 30px !important;
          }

          .hero-tech-section {
            padding: 40px 16px 0 !important;
          }

          .hero-tech-title {
            font-size: 16px !important;
          }

          .hero-tech-desc {
            font-size: 12.5px !important;
          }

          .hero-tech-image {
            width: 270px !important;
          }
        }
      `}</style>

      <div id="home" className="hero-wrapper" style={styles.wrapper}>

        {/* BACKGROUND ANIMATION */}
        <div className="hero-bg" style={styles.bg}>
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


        {/* MAIN CONTENT */}
        <div className="hero-container" style={styles.container}>

          <h1 className="hero-title" style={styles.title}>
            WE DELIVER NEXT-GEN
          </h1>

          <h2 className="hero-subtitle" style={styles.subtitle}>
            WEB / MOBILE APPS
          </h2>

          <a href="#contact" className="hero-button" style={styles.button}>
            Book a Call
          </a>

          {/* PHONE IMAGE */}
          <img
            src={phones}
            alt="App preview"
            style={styles.phoneImage}
            className="phone-anim hero-phone"
          />

        </div>


        {/* TECH SECTION */}
        <div className="hero-tech-section" style={styles.techSection}>

          {/* LEFT */}
          <div className="hero-tech-left" style={styles.techLeft}>

            <div className="hero-tech-title" style={styles.techText}>
              WE USE LATEST TECHNOLOGY
            </div>

            <div className="hero-tech-desc" style={styles.techDesc}>
              {`Our Team with 3+ years of experience crafting cutting-edge apps
will set your business apart with innovative approach and proven tracks
we’ll take your business to the next level.`}
            </div>

          </div>


          {/* RIGHT */}
          <div
            className="hero-tech-image-wrapper"
            style={styles.techImageWrapper}
          >
            <img
              src={techStack}
              alt="Tech Stack"
              className="hero-tech-image"
              style={styles.techImage}
            />
          </div>

        </div>


        {/* FLOAT ANIMATION */}
        <style>{`
          @keyframes floatPhone {
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-20px);
            }
          }

          .phone-anim {
            animation: floatPhone 6s ease-in-out infinite;
          }
        `}</style>

      </div>
    </>
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


  /* BACKGROUND */
  bg: {
    position: "absolute",
    top: "18%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "35%",
    height: "35%",
    zIndex: 2,
  },


  /* MAIN CONTENT */
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


  /* PHONE */
  phoneImage: {
    marginTop: "50px",
    width: "950px",
    maxWidth: "95%",
    height: "auto",
    zIndex: 2,
    transform: "scale(1.1)",
  },


  /* TECH SECTION */
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


  techLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "600px",
    marginLeft: "135px",
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


  /* TECH IMAGE */
  techImageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },


  techImage: {
    width: "420px",
    maxWidth: "100%",
    height: "auto",
    transform: "translateY(35px) translateX(-90px)",
    objectFit: "contain",
  },
};


export default Hero;