import { useState } from "react";
import "./cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
const cursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const mouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", mouseMove);

		return () => window.removeEventListener("mousemove", mouseMove);
	}, []);

	return (
		<motion.div
			animate={{ x: position.x + 10, y: position.y + 10 }}
			className="cursor"
		></motion.div>
	);
};

export default cursor;
