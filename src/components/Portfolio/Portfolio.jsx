import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ecommerce from '../../assets/ecommerce.png'
import learndo from '../../assets/learndo.png' 
import chat from '../../assets/chat.png'
import admin from '../../assets/admin.png'
const items = [
	{
		id: 1,
		title: "Mern Ecommerce App",
		img: ecommerce,
		desc: "A user-friendly ecommerce like interface . It has features such as product filtering,  product listings, product details display, shopping cart, user authentication, and Stripe payment functionality. With a focus on responsiveness, users can seamlessly browse, purchase, and securely checkout, ensuring a smooth and convenient experience across devices",
		link:"https://becoomerce.onrender.com"
	},
	{
		id: 2,
		title: "Mern Chat App",
		img: chat,
		desc: "A user-friendly chat application that includes features such as single chat, group chat, user authentication, online last seen status and  real-time messaging with the help of socket.io which ensures instantaneous communication between users, enhancing the interactive nature of the platform.",
		link:"https://wechat-0ytb.onrender.com"
	},
	{
		id: 3,
		title: "React Admin Dashboard Design",
		img: admin,
		desc: "A React.js Admin Dashboard With intuitive navigation, it empowers administrators to manage users, orders, and products effortlessly. Dive into interactive charts for revenue insights, toggle dark mode for enhanced usability, and witness seamless data visualization—all without backend dependencies.",
		link:"https://admindashboard-y7kl.onrender.com"
	},
	{
		id: 4,
		title: "React Learndo App",
		img: learndo,
		desc: 
		"Leardo is your ultimate language learning companion to master Japanese, Hindi, Spanish, and French. With its intuitive interface and comprehensive resources, you can explore each language through 8 sequential pages, pairing English words with their translations. Interactive quizzes provide instant feedback, allowing you to gauge your progress and focus on areas needing improvement.",
		link:"https://learndo.vercel.app/"
	},
];

const Single = ({ title, img, desc ,link}) => {
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
						<a href={link} target="_blank" > See Demo</a>
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
