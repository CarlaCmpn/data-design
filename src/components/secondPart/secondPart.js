import React from "react"

import  "./secondPart.scss"
import comedyImg from "../../assets/images/movieGender/comedy.png";
import horrorImg from "../../assets/images/movieGender/horror.png";
import crimeImg from "../../assets/images/movieGender/crime.png";
import romanceImg from "../../assets/images/movieGender/romance.png";
import actionImg from "../../assets/images/movieGender/action.png";
import documentaryImg from "../../assets/images/movieGender/documentary.png";
import firstBg from "../../assets/images/bestMovieBg/firstBg.png";
import secondBg from "../../assets/images/bestMovieBg/secondBg.png";
import thirdBg from "../../assets/images/bestMovieBg/thirdBg.png";
import fourthBg from "../../assets/images/bestMovieBg/fourthBg.png";

const SecondPart = ({data}) => {

	let firstRankingImage;
	let secondRankingImage;
	let thirdRankingImage;
	let fourthRankingImage;
	let bestMovieBg

	if(data.year === 1960){
		firstRankingImage = comedyImg;
		secondRankingImage = romanceImg;
		thirdRankingImage = crimeImg;
		fourthRankingImage = horrorImg;
		bestMovieBg = firstBg;
	} else if(data.year === 1980){
		firstRankingImage = comedyImg;
		secondRankingImage = actionImg;
		thirdRankingImage = crimeImg;
		fourthRankingImage = horrorImg;
		bestMovieBg = secondBg;
	} else if(data.year === 2007){
		firstRankingImage = comedyImg;
		secondRankingImage = romanceImg;
		thirdRankingImage = horrorImg;
		fourthRankingImage = crimeImg;
		bestMovieBg = thirdBg;
	} else if(data.year === 2017){
		firstRankingImage = comedyImg;
		secondRankingImage = documentaryImg;
		thirdRankingImage = horrorImg;
		fourthRankingImage = romanceImg;
		bestMovieBg = fourthBg;
	}

	return(
		<div className="block-container__content">
			<div className="block-container__content__left">
				<div className="block-container__content--percentage">
					<span>En {data.year}, seulement</span>
					<div className="block-container__content--percentage--line">
						<span>{data.genderPercentage}%</span>
						<span>des films sont des <br/> films d’horreur.</span>
					</div>
				</div>
				<div className="block-container__content--genders">
					<div className="block-container__content--genders--bar">
						<span>{data.genderRanking.first.gender}</span>
						<span>{data.genderRanking.first.percentage}%</span>
						<div style={{height: `${data.genderRanking.first.percentage*13}px`, backgroundImage: `url(${firstRankingImage})`}} ></div>
					</div>
					<div className="block-container__content--genders--bar">
						<span>{data.genderRanking.second.gender}</span>
						<span>{data.genderRanking.second.percentage}%</span>
						<div style={{height: `${data.genderRanking.second.percentage*13}px`, backgroundImage: `url(${secondRankingImage})`}} ></div>
					</div>
					<div className="block-container__content--genders--bar">
						<span>{data.genderRanking.third.gender}</span>
						<span>{data.genderRanking.third.percentage}%</span>
						<div style={{height: `${data.genderRanking.third.percentage*13}px`, backgroundImage: `url(${thirdRankingImage})`}} ></div>
					</div>
					<div className="block-container__content--genders--bar">
						<span>{data.genderRanking.fourth.gender}</span>
						<span>{data.genderRanking.fourth.percentage}%</span>
						<div style={{height: `${data.genderRanking.fourth.percentage*13}px`, backgroundImage: `url(${fourthRankingImage})`}} ></div>
					</div>
				</div>
			</div>
			<div className="block-container__content__right" style={{backgroundImage: `url(${bestMovieBg})`}}>
				<div className="block-container__content--best-movie">
					<span>Le film le plus apprécié</span>
					<span>{data.bestMovie.name}</span>
				</div>
			</div>
		</div>
	)
}

export default SecondPart;