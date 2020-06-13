import React, { Component} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import {greeting} from '../../portfolio';
import {Fade} from 'react-reveal';
import './ContactComponent.css';


const blogSection = {
	/* Blogs Section */

	title: "Blogs",
	subtitle:
		"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
	link: "https://web.facebook.com/mudasir.hussain.1671897",
	avatar_image_path: "blogs_image.svg"
};

const addressSection = {
	title: "Address",
	subtitle:
		"Street# 29, Jamil Abad Taxila, Rawalpendi, Pakistan",
	avatar_image_path: "address_image.svg",
	location_map_link: "https://www.google.com/maps/place/Street+29,+Jamilabad,+Wah,+Rawalpindi,+Punjab,+Pakistan/@33.7392951,72.7817774,17z/data=!3m1!4b1!4m5!3m4!1s0x38dfa6b9b1f239f9:0x3cd5b2cfe357add3!8m2!3d33.7392951!4d72.7839661"};

const phoneSection = {
    title: "Phone Number",
    subtitle: "+92 3060205253"
}

const ContactData = {
	title: "Contact Me",
    profile_image_path: "mudasir.jpg",
    description: "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Blockchain, MERN Stack,MnogoDb,Express React, Node, React Native, Bootstrap3/4, HTML,CSS, Javascript, static application, Dynamic application, Cloud and Opensource Development."
};

class Contact extends Component {
    render() {
        return (
					<div className="contact-main">
						<Header />
						<div className="basic-contact">
							<Fade bottom duration={1000} distance="40px">
								<div className="contact-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="contact-heading-text-div">
										<h1 className="contact-heading-text">
											{ContactData["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{ContactData["description"]}
										</p>
										<SocialMedia />
										<div className="resume-btn-div">
											<Button
												text="See My Resume"
												newTab={true}
												href={greeting.resumeLink}
											/>
										</div>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="blog-heading-div">
									<div className="blog-heading-text-div">
										<h1 className="blog-heading-text">
											{blogSection["title"]}
										</h1>
										<p className="blog-header-detail-text subTitle">
											{blogSection["subtitle"]}
										</p>
										<div className="blogsite-btn-div">
											<Button
												text="Visit My Blogsite"
												newTab={true}
												href={blogSection.link}
											/>
										</div>
									</div>
									<div className="blog-heading-img-div">
										<img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
								</div>
							</Fade>
							<Fade bottom duration={1000} distance="40px">
								<div className="address-heading-div">
									<div className="contact-heading-img-div">
										<img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/>
									</div>
									<div className="address-heading-text-div">
										<h1 className="address-heading-text">
											{addressSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{addressSection["subtitle"]}
										</p>
										<h1 className="address-heading-text">
											{phoneSection["title"]}
										</h1>
										<p className="contact-header-detail-text subTitle">
											{phoneSection["subtitle"]}
										</p>
										<div className="address-btn-div">
											<Button
												text="Visit on Google Maps"
												newTab={true}
												href={addressSection.location_map_link}
											/>
										</div>
									</div>
								</div>
							</Fade>
						</div>
						<Footer />
					</div>
				);
    }
}

export default Contact;