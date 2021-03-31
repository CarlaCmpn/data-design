import React from "react"
import {
	Link
  } from "react-router-dom";

import "./intro.scss"

const Intro = () => {
	return(
		<div className="block-intro">
			<div className="block-intro__content">
				<h2>L'évolution du</h2>
				<h1>Cinéma d'horreur</h1>
				<h2>à travers le temps</h2>
			</div>
			<div className="block-intro__button">
				<Link to="/fiche">Découvrir</Link>
			</div>
		</div>
	)
}

export default Intro;