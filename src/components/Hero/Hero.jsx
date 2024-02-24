import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import hero from '../../assets/hero.png'
import scroll from '../../assets/scroll.png'
const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const SliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-380%",

		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};
const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>Geetam Das Binani</motion.h2>
					<motion.h1 variants={textVariants}>Web Developer</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.button variants={textVariants}>
							See the latest Works
						</motion.button>
						<motion.button variants={textVariants}>Contact Me</motion.button>
					</motion.div>
					<motion.img
						variants={textVariants}
						animate="scrollButton"
						src={scroll}
						alt="scrollButton"
					/>
				</motion.div>
			</div>

			<motion.div
				initial="initial"
				animate="animate"
				variants={SliderVariants}
				className="slidingTextContainer"
			>
				Frontend Backend Mern Stack Developer
			</motion.div>
			<div className="imageContainer">
				<img src={hero} alt="heroImg" />
			</div>
		</div>
	);
};

export default Hero;
