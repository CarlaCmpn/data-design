import React  from "react"

import { Line } from "react-chartjs-2";

import "./thirdPart.scss"

const ThirdPart = () => {

	const data = {
		labels: [1960, 1980, 2007, 2017],
		datasets: [
			{
				label: "Horreur",
				data: [37, 89, 269, 497],
				fill: true,
				// backgroundColor: "#FF4614",
				borderColor: "#FF4614"
			}
		]
	}
		


	return(
		<div className="block-container__content--part3">
			<div className="block-container__content__left">
				<h2>En résumé</h2>
				<Line data={data} />
			</div>
		</div>
	)
}

export default ThirdPart;