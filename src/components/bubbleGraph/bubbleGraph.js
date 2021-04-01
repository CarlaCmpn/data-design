import React, { Component } from "react"
import * as d3 from 'd3';

import "./bubbleGraph.scss"

class BubbleGraph extends Component {
	constructor(props){
		super(props)

		this.state = {
			data : this.props.data
		}
	}

	el = React.createRef();

	createSVG(){
		return d3.select(this.el)
		.append("svg")
		.attr("width", "100%")
		.attr("height", "50vh")
		.attr('style', "border: thin red solid")
	}

	drawChart(svg){
		// svg.append("circle").attr("r", 100)
		let hierachalData= this.makeHierarchy(this.state.data)
		let packLayout = this.pack([400-5, 400-5])
		const root = packLayout(hierachalData);

		const leaf = svg
			.selectAll("g")
			.data(root.leaves())
			.join("g")
			.attr("transform", d => `translate(${d.x + 1}, ${d.y + 1})` );
		
		leaf
			.append("circle")
			.attr("r", d => d.r)
			.attr("fill-opacity", 0.7)
			.attr("fill", "white")
		
		leaf.append("text")
			.attr("clip-path", d => d.country)
	}

	pack(size){
		return d3.pack()
		.size(size)
		.padding(3)
	}

	makeHierarchy(data){
		return d3.hierarchy({children : this.state.data}).sum(d => d.movies);
	}

	componentDidMount(){
		let svg = this.createSVG();
		this.drawChart(svg)
	}

	render(){
		console.log(this.state.data)
		return(
			<div>
				<div id="bubblechart" ref={el => (this.el = el)} />
			</div>
		)
	}
}

export default BubbleGraph;