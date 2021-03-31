import React from "react";

import "./footer.scss"
import arrow from "../../assets/images/icon/arrow.svg"

const Footer  = () => {

	return(
		<footer className="block-footer">
			<div className="block-footer__square">
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
				<div className="block-footer__square--item"></div>
			</div>
			<div className="block-footer__details">
				<div className="block-footer__details--item">
					<p>1960</p>
				</div>
				<div className="block-footer__details--item">
					<p>Next date</p>
					<img src={arrow} alt="arrow_icon"/>
				</div>
			</div>
		</footer>
	)
}

export default Footer;