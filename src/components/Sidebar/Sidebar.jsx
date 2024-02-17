import "./sidebar.scss";
import Links from "./Links/Links";
import ToggleButtons from "./ToggleButtons/ToggleButtons";
import { motion } from "framer-motion";
import { useState } from "react";
const variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px)",
		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath: "circle(30px at 50px 50px)",
		transition: {
			type: "spring",
			delay: 0.5,
			stiffness: 400,
			damping: 40,
		},
	},
};
const Sidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div className="sidebar" animate={open ? "open" : "closed"}>
			<motion.div className="bg" variants={variants}>
				<Links />
			</motion.div>
			<ToggleButtons setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
