import { useState, useEffect } from "react";
import logoImg from "../assets/hibuz.png";

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "HOME", id: "home" },
    { name: "TESTIMONIAL", id: "testimonial" },
    
    { name: "CASES", id: "projects" },
    { name: "SERVICES", id: "services" },
    { name: "BLOG", id: "blog" },
    { name: "ABOUT", id: "about" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
         "testimonial",
         "projects",
        "services",
        
        "blog",
        "about"
      ];

      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.toUpperCase();
          }
        }
      });

      if (currentSection) setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // optional: lock body scroll when mobile menu open
  useEffect(() => {
    if (window.innerWidth <= 900) {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
     <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  /* =========================
     NAVBAR
  ========================= */

  .navbar {
    width: 100%;
    height: 96px;
    padding: 0 5%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Exo 2", sans-serif;

    position: sticky;
    top: 0;
    z-index: 99999;

    background: #ffffff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  /* =========================
     LOGO
  ========================= */

  .logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 0;
    flex-shrink: 0;
  }

  .logo-img {
    width: 60px;
    height: 60px;

    border-radius: 50%;
    object-fit: cover;

    margin-bottom: 4px;
    margin-top: 15px;

    max-width: none;
  }

  .logo-text {
    font-family: 'Rajdhani', sans-serif;
    font-size: 18px;
    font-weight: 700;

    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    letter-spacing: 2px;
    white-space: nowrap;
  }

  /* =========================
     RIGHT SIDE
  ========================= */

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 20px;
    min-width: 0;
  }

  /* =========================
     DESKTOP LINKS
  ========================= */

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;

    list-style: none;
  }

  .nav-links a {
    text-decoration: none;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;

    color: #000000;
    cursor: pointer;

    transition: color 0.25s ease;
    white-space: nowrap;
  }

  .nav-links a.active {
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links a:hover:not(.active) {
    color: #64748b;
  }

  /* =========================
     HIRE US BUTTON
  ========================= */

  @keyframes glowPulse {
    0% {
      transform: scale(1);
      box-shadow:
        0 0 4px 1px rgba(139, 92, 246, 0.2),
        0 0 10px 2px rgba(99, 102, 241, 0.12);
    }

    50% {
      transform: scale(1.06);
      box-shadow:
        0 0 8px 3px rgba(139, 92, 246, 0.35),
        0 0 20px 6px rgba(99, 102, 241, 0.2),
        0 0 35px 10px rgba(56, 189, 248, 0.08);
    }

    100% {
      transform: scale(1);
      box-shadow:
        0 0 4px 1px rgba(139, 92, 246, 0.2),
        0 0 10px 2px rgba(99, 102, 241, 0.12);
    }
  }

  .live-btn {
    background: linear-gradient(135deg, #02ACE8, #7C6EFA);

    color: #ffffff;

    border: none;

    padding: 10px 20px;

    border-radius: 1px;

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;

    cursor: pointer;
    white-space: nowrap;

    transition: opacity 0.3s, transform 0.3s;

    animation: glowPulse 2.8s ease-in-out infinite;
  }

  .live-btn:hover {
    opacity: 0.92;
    animation-play-state: paused;
    transform: scale(1.08);

    box-shadow:
      0 0 10px 4px rgba(139, 92, 246, 0.45),
      0 0 24px 8px rgba(99, 102, 241, 0.25),
      0 0 40px 12px rgba(56, 189, 248, 0.1);
  }

  /* =========================
     MENU ICON
  ========================= */

  .menu-icon {
    display: none;

    width: 42px;
    height: 42px;

    border-radius: 10px;

    border: none;

    background: #141414;
    color: #ffffff;

    cursor: pointer;

    align-items: center;
    justify-content: center;

    font-size: 22px;
    line-height: 1;

    user-select: none;

    transition: all 0.25s ease;

    position: relative;
    z-index: 100000;
  }

  .menu-icon:hover {
    background: #242424;
  }

  /* =========================
     MOBILE OVERLAY
  ========================= */

  .mobile-overlay {
    display: none;
  }

  /* ==================================================
     MOBILE
  ================================================== */

@media (max-width: 900px) {

  /* =========================
     MOBILE NAVBAR
  ========================= */

  .navbar {
    height: 64px;
    padding: 0 10px;

    position: sticky;
    top: 0;
    z-index: 99999;

    background: #ffffff;
  }

  /* =========================
     LOGO
  ========================= */

  .logo-wrapper {
    flex-shrink: 0;
    margin-left: 0;
  }

  .logo-img {
    width: 38px;
    height: 38px;

    margin-top: 0;
    margin-bottom: 1px;
  }

  .logo-text {
    font-size: 8px;
    letter-spacing: 0.7px;
  }

  /* =========================
     RIGHT SIDE
  ========================= */

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    flex: 1;
    gap: 0;
    min-width: 0;
  }

  /* =========================
     SHOW ALL LINKS
  ========================= */

  .nav-links {
    position: static;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    gap: 10px;

    width: auto;
    max-width: none;

    padding: 0;
    margin: 0;

    background: transparent;
    border: none;
    border-radius: 0;

    backdrop-filter: none;
    box-shadow: none;

    opacity: 1;
    pointer-events: auto;

    transform: none;

    list-style: none;
  }

  .nav-links li {
    width: auto;
    flex-shrink: 0;
  }

  .nav-links a {
    display: block;

    width: auto;

    padding: 0;

    border-radius: 0;

    background: transparent;
    border: none;

    color: #000000;

    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.3px;

    white-space: nowrap;

    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    background: transparent;
    border: none;
    color: #64748b;
  }

  .nav-links a.active {
    background: linear-gradient(90deg, #38bdf8, #818cf8);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-image: linear-gradient(
      90deg,
      #38bdf8,
      #818cf8
    );
  }

  /* =========================
     HIDE HIRE US
  ========================= */

  .live-btn {
    display: none;
  }

  /* =========================
     HIDE HAMBURGER
  ========================= */

  .menu-icon {
    display: none;
  }

  /* =========================
     HIDE OVERLAY
  ========================= */

  .mobile-overlay {
    display: none;
  }
}






  /* ==================================================
     SMALL MOBILE
  ================================================== */

 @media (max-width: 480px) {

  .navbar {
    height: 58px;
    padding: 0 8px;
  }

  .logo-img {
    width: 34px;
    height: 34px;
  }

  .logo-text {
    font-size: 7px;
    letter-spacing: 0.5px;
  }

  .nav-links {
    gap: 7px;
  }

  .nav-links a {
    font-size: 7px;
    letter-spacing: 0.15px;
  }
}





`}</style>








      <nav className="navbar">
       <div className="logo-wrapper">
  <img src={logoImg} alt="logo" className="logo-img" /> 
  <div className="logo-text">HIBUZ TECHNOLOGIES</div>
</div>

        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id.toUpperCase() ? "active" : ""}
                  onClick={() => {
                    setActive(link.id.toUpperCase());
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="live-btn"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            HIRE US
          </button>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;