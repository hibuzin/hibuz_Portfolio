import mithuImg from "../assets/mithu.png";
import adamImg from "../assets/adam.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Muthu",
      image: mithuImg,
      role: "CEO, ISM DATA",
      text: `"In a short period, Hibuz created a website for our UK-based jewellery store to showcase capability & attract potential clients"`,
    },
    {
      name: "Adam",
      image: adamImg,
      role: "Proprietor, Cresent Agency",
      text: `"Recently we installed hibuz billing for our cresent agency, till now we didn't face any issues and we easily send our audit reports to our Auditor"`,
    },
    {
      name: "Surya",
      image: mithuImg,
      role: "CEO, Zandrix Technologies",
      text: `"We worked with these guys to build a software product for our business, they are very talented & I never seen this much of enthusiasm in a team before. I highly recommend them for your next project."`,
    },
    {
      name: "Basi",
      image: mithuImg,
      role: "Proprietor, AR Traders",
      text: `"Recently we started using Hibuz billing for our business, the UI looks more modern & the features are very useful."`,
    },

  ];

  return (
    <>
      <style>{`
        .testimonial-section {
          overflow: hidden;
        }

        .testimonial-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 50px;
          color: #04295e;
        }

        .testimonial-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .testimonial-track {
          display: flex;
          width: max-content;
          gap: 30px;
          animation: testimonialLoop 18s linear infinite;
        }

        .testimonial-card {
          width: 400px;
          flex-shrink: 0;
          padding: 30px;
          border-radius: 16px;
          background: #f8fafc;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .testimonial-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
        }

        .testimonial-name {
          font-size: 16px;
          font-weight: 700;
          color: #04295e;
          margin: 0;
        }

        .testimonial-role {
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 15px;
        }

        @keyframes testimonialLoop {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-400px - 30px));
          }
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 600px) {

          .testimonial-section {
            padding: 70px 0 !important;
          }

          .testimonial-title {
            font-size: 24px !important;
            margin-bottom: 35px !important;
          }

          .testimonial-track {
            gap: 15px;
            animation-duration: 15s;
          }

          .testimonial-card {
            width: 300px;
            padding: 22px 18px;
          }

          .testimonial-avatar {
            width: 65px;
            height: 65px;
            margin-bottom: 15px;
          }

          .testimonial-name {
            font-size: 15px;
          }

          .testimonial-role {
            font-size: 12px;
          }

          .testimonial-text {
            font-size: 13px;
            line-height: 1.5;
          }

          @keyframes testimonialLoop {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-300px - 15px));
            }
          }
        }

        @media (max-width: 400px) {

          .testimonial-title {
            font-size: 21px !important;
          }

          .testimonial-card {
            width: 280px;
          }

          @keyframes testimonialLoop {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-280px - 15px));
            }
          }
        }

        /* Pause when user hovers */
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        id="testimonial"
        className="testimonial-section"
        style={styles.wrapper}
      >
        <h2 className="testimonial-title">
          Clients Say We Deliver
        </h2>

        <div className="testimonial-slider">
          <div className="testimonial-track">

            {testimonials.map((testimonial, index) => (
              <div
                className="testimonial-card"
                key={index}
              >
               <img
  src={testimonial.image}
  alt={testimonial.name}
  className="testimonial-avatar"
/>

                <h4 className="testimonial-name">
                  {testimonial.name}
                </h4>

                <p className="testimonial-role">
                  {testimonial.role}
                </p>

                <p className="testimonial-text">
                  {testimonial.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  wrapper: {
    padding: "100px 60px",
    background: "#ffffff",
    textAlign: "center",
  },
};

export default TestimonialSection;