import React from "react";

import "./footer.scss"
import arrow from "../../assets/images/icon/arrow.svg"

const Footer  = ({year, next_1, next_2}) => {

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
						<p>{next_1}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
				</div>
				<div className="block-footer__details__content">
					<div className="block-footer__details__content--year">
						<p>{year}</p>
					</div>
					<div className="block-footer__details__content--next">
						<p>{next_2}</p>
						<img src={arrow} alt="arrow_icon"/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;