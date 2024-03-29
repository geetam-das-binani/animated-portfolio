import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'


const Navbar = () => {
	return (
		<div className="navbar">
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Geetam Das Binani
				</motion.span>
				<div className="social">
					<a
						target="_blank"
						href="https://www.facebook.com/geetamdas.binani.1/"
					>
						<img src={facebook} alt="facebook" />
					</a>{" "}
					<a
						target="_blank"
						href="https://www.instagram.com/_g.e.e.t.a.m_/?hl=en"
					>
						<img src={instagram} alt="instagram" />
					</a>{" "}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
