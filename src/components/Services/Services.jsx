import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>

          <p>
            Our frontend service focuses on creating visually appealing and
            user-friendly interfaces. We specialize in crafting responsive
            designs that provide seamless user experiences across devices.
            Leveraging modern frontend technologies, we ensure your website or
            application stands out with its aesthetic appeal and functionality.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            With our backend service, we handle the server-side development to
            power your applications. We design robust and scalable backend
            architectures tailored to meet your specific business needs. Our
            expertise lies in building efficient APIs, managing databases, and
            implementing server logic to ensure optimal performance and
            security.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack</h2>
          <p>
            We build robust full-stack applications using the power of MongoDB,
            Express.js, React.js, Node.js, and Next.js. Our expertise lies in
            crafting scalable solutions that seamlessly blend frontend
            aesthetics with backend performance. Whether it’s building dynamic
            dashboards, real-time applications, or RESTful APIs, we deliver
            end-to-end solutions tailored to meet modern business needs.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
