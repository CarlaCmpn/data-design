import React, {useEffect, useRef} from "react"

import "./fiche.scss"
import FirstPart from "../../components/firstPart/firstPart"
import SecondPart from "../../components/secondPart/secondPart"
import ThirdPart from "../../components/thirdPart/thirdPart"

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import LocomotiveScroll from 'locomotive-scroll'
import '../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

import json from "../../movies_db.json"

const Fiche = () => {

	const ref = useRef(null)
	const data = json

	console.log(data)

	useEffect(()=> {
		if(ref){
			new LocomotiveScroll({
				el: ref.current,
				smooth: true,
				direction: 'horizontal',
				// multiplier: 0.5
			})
		}
	}, [])

	return(
		<div className="block-scroll" data-scroll-container ref={ref}>
			<div className="block-fiche">
				{data.map((item, i) =>
					<div className="block-container" key={i}>
						<Header text_1={i+1+"A"} text_2={i+1+"B"}  text_3={i+1+"C"} />
						<div className="block-container__main">
							<FirstPart data={item}/>
							<SecondPart data={item}/>
						</div>
						<Footer year={item.year} next="Next date"/>
					</div>
				)}
				<div className="block-container">
				<Header text_1="5A" text_2="5B" text_3="5C"/>
				<ThirdPart data={data}/>
				<Footer year="Résumé" next="End"/>
				</div>
			</div>
		</div>
	)
}

export default Fiche;