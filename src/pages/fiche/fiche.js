import React, {useEffect, useRef} from "react"

import "./fiche.scss"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import FirstPart from "../../components/firstPart/firstPart"

import LocomotiveScroll from 'locomotive-scroll'
import '../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'

const Fiche = () => {

	const ref = useRef(null)

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
		<>
			<Header />
			<div className="block-scroll" data-scroll-container ref={ref}>
				<div className="block-fiche">
					<FirstPart />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Fiche;