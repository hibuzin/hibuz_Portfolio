
import React from "react";
import "./blog.css";

const blogs = [
  {
    title:
      "How We Built a Real-Time Inventory System for a Jewellery E-commerce Website",
    desc:
      "A case study on how we build a scalable real-time inventory system for a jewellery store using Socket.io for real time update",
    img: "/assets/jewellery.png",
    link:
      "https://medium.com/@hibuzin/how-we-built-a-real-time-inventory-system-for-a-jewellery-e-commerce-website-44554646ca1d",
  },
  {
    title:
      "Client Needed an Urgent MVP — We Delivered a Complete Jewellery Store in 24 Hours",
    desc:
      "Know how we launch MVP products for startups using React.js as a frontend and Node.js connected with MongoDB for backend",
    img: "/assets/jewellery2.png",
    link:
      "https://medium.com/@hibuzin/client-needed-an-urgent-mvp-we-delivered-a-complete-jewellery-store-in-24-hours-c63923138efd",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">

        {/* Section Label */}
        <p className="blog-label">OUR BLOG</p>

        {/* Section Title */}
        <h2 className="blog-title">Our Latest Blog</h2>

        {/* Section Description */}
        <p className="blog-sub">
          Insights, case studies, and experiences from our journey building
          modern digital products.
        </p>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article className="blog-card" key={index}>

              {/* Blog Image */}
              <div className="blog-image-wrapper">
                <img src={blog.img} alt={blog.title} />
              </div>

              {/* Blog Content */}
              <div className="blog-content">

                <h3>{blog.title}</h3>

                <p>{blog.desc}</p>

                <button
                  type="button"
                  onClick={() => window.open(blog.link, "_blank")}
                >
                  Read More →
                </button>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;



