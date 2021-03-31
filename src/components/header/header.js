import React from "react";

import "./header.scss"
import arrow from "../../assets/images/icon/arrow.svg"

const Header  = () => {


	return(
		<nav className="block-navbar">
			<div className="block-navbar__details">
				<div className="block-navbar__details--item">
					<p>11A</p>
					<img src={arrow} alt="arrow_icon"/>
				</div>
				<div className="block-navbar__details--item">
					<p>12</p>
				</div>
				<div className="block-navbar__details--item">
					<p>12A</p>
					<img src={arrow} alt="arrow_icon"/>
				</div>
			</div>
			<div className="block-navbar__square">
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
				<div className="block-navbar__square--item"></div>
			</div>
		</nav>
	)
}

export default Header;