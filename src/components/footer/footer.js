import React from "react";

import "./footer.scss"
import arrow from "../../assets/images/icon/arrow.svg"

const Footer  = ({year}) => {

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
				<div className="block-footer__details__content">
					<div className="block-footer__details__content--year">
						<p>{year}</p>
					</div>
					<div className="block-footer__details__content--next">
						<p>Next date</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
				</div>
				<div className="block-footer__details__content">
					<div className="block-footer__details__content--year">
						<p>{year}</p>
					</div>
					<div className="block-footer__details__content--next">
						<p>Next date</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;