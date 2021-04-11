// import { cleanup } from "@testing-library/react";
import { reduce } from "d3-array";
import React, {useEffect, useState, useRef}  from "react"
import { defaults } from 'react-chartjs-2'

import { Line } from "react-chartjs-2";

import "./thirdPart.scss"

const ThirdPart = () => {

	defaults.global.defaultFontColor = 'white'
	defaults.global.defaultFontFamily = 'DM Sans'
	defaults.global.defaultFontSize = 20

	const data = {
		labels: [1960, 1970, 1980, 1990, 2000, 2007, 2017],
		datasets: [
			{
				label: "Horreur",
				data: [37, 64, 89, 112, 95, 269, 497],
				fill: true,
				borderColor: "#FF4614",
				borderWidth: 4,
				backgroundColor: "#06060A",
			},
			{
				label: "Crime",
				data: [74, 74, 85, 132, 215, 271, 342],
				fill: true,
				borderColor: "#80240A",
				backgroundColor: "#06060A",
			},
			{
				label: "Comédie",
				data: [131, 211, 227, 291, 487, 707, 1041],
				fill: true,
				borderColor: "#804230",
				backgroundColor: "#06060A",
			},
			{
				label: "Romance",
				data: [78, 83, 63, 98, 285, 352, 410],
				fill: true,
				borderColor: "#af5840",
				backgroundColor: "#06060A",
			}
		]
	}

	const [isVisible, setVisible] = useState(true);
  	const domRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => {
			observer.unobserve(domRef.current);
			// cleanup(domRef.current);
		}
	}, []);
		


	return(
		<div className="block-container__content--part3">
			<div className="block-container__content__left">
				<h2>En résumé</h2>
				<div className="block-container__content__left--graph">
					<Line data={data} />
				</div>
			</div>
			<div className="block-container__content__right">
				<h2>Conclusion</h2>
				<p>Le genre horrifique s’est imposé au fil des années, devenant de plus en plus populaire et apprécié. C’est le genre cinématographique qui s’est le plus diversifé, créant de nombreux sous-genres.</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Torture Porn</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Home Invasion</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Horror documentary</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Zombies</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Monsters</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Splaters</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Paranormal</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Haunted House</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Extreme</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Cannibal</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Vampire</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Slasher</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Aliens</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Found footage</p>
				<p className={"block-container__content__right--item"+" "+`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>Survival</p>
			</div>
		</div>
	)
}

export default ThirdPart;