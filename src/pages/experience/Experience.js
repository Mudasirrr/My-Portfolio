import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as Blockchain and Web Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Web and BLockchain Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "MERN Stack Developer",
					company: "MZosn Technology",
					company_url: "",
					logo_path: "mzosn.png",
					duration: "June 2018 - PRESENT",
					location: "Taxila, Pakistan",
					description: ".",
					color: "#0879bf"
				}
			]
		},
		{
			title: "Internships",
			experiences: [
			]
		},
		{
			title: "Volunteerships",
			experiences: [
				
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations ,These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
