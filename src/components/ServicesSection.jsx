import React from "react";
import "./services.css";

import { 
  Headset, 
  Smartphone, 
  Globe, 
  Paintbrush, 
  Sparkles, 
  RefreshCw, 
  Bug,
  Zap,
  Layout,
  Server,
} from "lucide-react";

const services = [
  
  {
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    desc: "We build cross-platform mobile apps with Flutter and React Native, and also develop native Android applications using Kotlin — delivering fast, scalable, and high-performance mobile experiences.",
    accent: "#f6f7f6",
   
  },
  {
    icon: <Globe size={22} />,
    title: "Website Development",
    desc: "High-performance, responsive websites and web applications built with modern technologies for speed, scalability, and seamless user experience.",
    accent: "#f2f6f7",
   
  },
  {
    icon: <Zap size={22} />,
    title: "MVP Development",
    desc: "We build products quickly — helping you launch your MVP in the shortest possible time.",
    accent: "#f5f4f2",
   
  },
  {
    icon: <Layout size={22} />,
    title: "UI Integration",
    desc: "Convert Figma designs into pixel-perfect, high-performance applications with clean and scalable implementation.",
    accent: "#fcfcfc",
   
  },
  {
    icon: <Server size={22} />,
    title: "Backend Development",
    desc: "Scalable APIs and backend systems using Node.js, Python, and MongoDB — built for speed, security, and reliability.",
    accent: "#feffff",
  
  },
  {
    icon: <Paintbrush size={22} />,
    title: "UI/UX Design",
    desc: "Modern, intuitive user interface and user experience design focused on usability, aesthetics, and conversion.",
    accent: "#fdfbfd",
   
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI Integration",
    desc: "Integrate AI features like chatbots, automation, and intelligent data processing into your applications to enhance functionality.",
    accent: "#fcfbfb",
   
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Migrating",
    desc: "Seamless migration of applications, databases, or platforms with minimal downtime while ensuring data integrity and security.",
    accent: "#fcfbf8",
   
  },
  {
    icon: <Bug size={22} />,
    title: "Bug Fixing",
    desc: "Identify, troubleshoot, and resolve application issues efficiently to improve performance, stability, and user experience.",
    accent: "#f9f7ff",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <p className="section-label">WHAT WE DO</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          End-to-end software solutions tailored to your business goals.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ "--accent": service.accent }}
          >
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

           
          </div>
        ))}
      </div>
    </section>
  );
}