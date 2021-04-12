import React from "react"
import Tilt from 'react-parallax-tilt';

import {
	Link
} from "react-router-dom";

import "./intro.scss"

const Intro = () => {
	return(
		<Tilt
			position="relative"
			tiltMaxAngleX={5}
			tiltMaxAngleY={5}
			perspective={1800}
			transitionSpeed={1500}
			scale={1.05}
			gyroscope={true}
			style={{height:"100vh", overflow:"none"}}
		>
			<div className="block-hidden">
				<h2>Pour une meilleure expérience, visualisez l'interface sur un écran plus grand</h2>
			</div>
			<div className="block-intro-movie">
				<div className="block-intro-movie block-intro1" ></div>
				<div className="block-intro-movie block-intro2" ></div>
				<div className="block-intro-movie block-intro3" ></div>
				<div className="block-intro-movie block-intro4" ></div>
				<div className="block-intro-movie block-intro5" ></div>
				<div className="block-intro-movie block-intro6" ></div>
				<div className="block-intro-movie block-intro7" ></div>
				<div className="block-intro-movie block-intro8" ></div>
				<div className="block-intro-movie block-intro9" ></div>
				<div className="block-intro-movie block-intro10" ></div>
				<div className="block-intro-movie block-intro11" ></div>
				<div className="block-intro-movie block-intro12" ></div>
				<div className="block-intro-movie block-intro13" ></div>
				<div className="block-intro-movie block-intro14" ></div>
				<div className="block-intro-movie block-intro15" ></div>
				<div className="block-intro-movie block-intro16" ></div>
			</div>
			<div className="block-intro">
				<div className="block-intro__content">
					<h2>L'évolution du</h2>
					<h1>Cinéma d'horreur</h1>
					<h2>en 4 dates clés</h2>
				</div>
				<div className="block-intro__button">
					<Link to="/fiche">Découvrir</Link>
				</div>
			</div>
		</Tilt>
	)
}

export default Intro;