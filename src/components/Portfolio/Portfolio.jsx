import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import chat from "../../assets/chat.png";
import hotel from "../../assets/hotel.png";
import BeatCancer from "../../assets/beat.png";
const items = [
  {
    id: 1,
    title: "Beat Cancer App",
    img: BeatCancer,
    desc: "AI Cancer Care is an advanced platform that leverages AI to deliver personalized cancer treatment plans. By interacting with Gemini AI, it analyzes patient data, medical records, and guidelines to identify gaps in cancer screening and follow-up care, crafting tailored solutions. The platform ensures secure data sharing through robust encryption  safeguarding patient information while enabling seamless access for healthcare providers.",
    link: "https://beat-cancer.onrender.com/",
  },
  
  {
    id: 2,
    title: "Mern Chat App",
    img: chat,
    desc: "A user-friendly chat application that includes features such as single chat, group chat, user authentication, online last seen status and  real-time messaging with the help of socket.io which ensures instantaneous communication between users, enhancing the interactive nature of the platform.",
    link: "https://wechat-0ytb.onrender.com",
  },
  {
    id: 3,
    title: "Mern Hotel Booking App",
    img: hotel,
    desc: "A user-friendly hotel app like interface.It includes essential features such as advanced accommodation filtering, detailed room listings, comprehensive room details display, an intuitive booking cart, secure user authentication, and seamless payment processing via Stripe. Designed with responsiveness in mind, users can seamlessly browse, book, and securely complete their reservations, ensuring a smooth and convenient experience across all devices. Welcome to the future of hassle-free hotel bookings!",
    link: "https://mern-booking-app-fji3.onrender.com",
  },
];

const Single = ({ title, img, desc, link }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={img} alt="projectImage" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={link} target="_blank">
              {" "}
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Portfolio;
