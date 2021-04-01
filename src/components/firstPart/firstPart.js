import React from "react"

import "./firstPart.scss"

const FirstPart = ({data}) => {

	return(
		<div className="block-container__content">
			<div className="block-container__content__left">
				<h1>{data.year}</h1>
				<div className="block-container__content--sub-genre">
					<h3>L’année qui introduit le sous-genre</h3>
					<h2>{data.subGender}</h2>
				</div>
				<div className="block-container__content--numbers">
					<div className="block-container__content--numbers--produced">
						<p>{data.movieProduction}</p>
						<h3>Films  produits</h3>
					</div>
					<div className="block-container__content--numbers--produced">
						<p>{data.productionCountriesNumber}</p>
						<h3>Pays producteurs</h3>
					</div>
					<div className="block-container__content--numbers--produced">
						<p>{data.evolutionStat}</p>
						<h3>{data.evolutionStatText}</h3>
					</div>
				</div>
			</div>
			<div className="block-container__content__right">
				
			</div>
		</div> 
	)
}

export default FirstPart;