import React from "react";

import "./header.scss"
import arrow from "../../assets/images/icon/arrow.svg"

const Header  = ({text_1, text_2, text_3}) => {


	return(
		<nav className="block-navbar">
			<div className="block-navbar__details">
				<div className="block-navbar__details__content">
					<div className="block-navbar__details__content--item">
						<p>{text_1}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
					<div className="block-navbar__details__content--item">
						<p>{text_2}</p>
					</div>
					<div className="block-navbar__details__content--item">
						<p>{text_3}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
				</div>
				<div className="block-navbar__details__content">
					<div className="block-navbar__details__content--item">
						<p>{text_1}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
					<div className="block-navbar__details__content--item">
						<p>{text_2}</p>
					</div>
					<div className="block-navbar__details__content--item">
						<p>{text_3}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
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