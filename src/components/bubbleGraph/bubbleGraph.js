import React, { Component } from "react"
import * as d3 from 'd3';

import "./bubbleGraph.scss"

class BubbleGraph extends Component {
	constructor(props){
		super(props)

		this.state = {
			data : this.props.data,
		}
	}

	el = React.createRef();

	createSVG(){
		return d3.select(this.el)
		.append("svg")
		.attr("width", "100%")
		.attr("height", "50vh")
	}

	drawChart(svg){
		d3.shuffle(this.state.data)
		let hierachalData= this.makeHierarchy(this.state.data)
		let packLayout = this.pack([400, 400])
		const root = packLayout(hierachalData)

		// let Tooltip = d3.select("#bubblechart")
		// 	.append("div")
		// 	.style("opacity", 1)
		// 	.attr("class", "tooltip")
		// 	.style("background-color", "white")
		// 	.style("border", "solid")
		// 	.style("border-width", "2px")
		// 	.style("border-radius", "5px")
		// 	.style("padding", "5px")

		const leaf = svg
			.selectAll("g")
			.data(root)
			.join("g")
			.attr("transform", d => `translate(${d.x + 1}, ${d.y + 1})` )
			.classed("big", d => d.data.movies >= 10)
			.classed("medium", d => d.data.movies < 10 && d.data.movies >= 8)
			.classed("regular", d => d.data.movies < 8 && d.data.movies >= 5)
			.classed("light", d => d.data.movies < 5)
			.classed("small", d => d.data.movies < 3)

		
		leaf
			.append("circle")
			.attr("r", function(d) { return d.r })
			.attr("fill-opacity", 1)

		
		leaf
			.append("text")
			.attr("x", 0)
			.attr("y", 0)
			.html(function(d) { return d.data.country})
			.attr("fill", "white")
			.attr("font-family", "Sinistre")

		// leaf
		// 	.append("text")
		// 	.attr("x", 0)
		// 	.attr("y", 0)
		// 	.html(function(d) { return d.data.movies})
		// 	.attr("fill", "white")
		// 	.attr("font-family", "Sinistre")
		
	}

	pack(size){
		return d3.pack()
		.size(size)
		.padding(30)
	}

	makeHierarchy(){
		return d3.hierarchy({children : this.state.data}).sum(d => d.movies);
	}

	componentDidMount(){
		let svg = this.createSVG();
		this.drawChart(svg)
	}

	render(){
		console.log(this.state.oui)
		return(
			<div id="bubblechart" ref={el => (this.el = el)} />
		)
	}
}

export default BubbleGraph;