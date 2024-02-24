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
          <h2>Mern Stack</h2>
          <p>
            Our MERN stack service encompasses end-to-end development using
            MongoDB, Express.js, React.js, and Node.js. We specialize in
            building full-stack applications with seamless integration of
            frontend and backend components. Leveraging the power of MERN stack,
            we deliver highly dynamic and interactive web applications that
            cater to modern user demands and business requirements.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
