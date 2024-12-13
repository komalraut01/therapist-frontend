import React, { useState, useEffect } from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { getDoctors } from "../service/doctors/index.service";
import avatar from '../images/avataar-default.jpg'

const DoctorCard = ({ item }) => {
	console.log(process.env.REACT_APP_BASE_URL + item.profile_pic);
	const [imgSrc, setImgSrc] = useState(process.env.REACT_APP_BASE_URL + item.profile_pic)

	return (
		<>
			<div className="col-lg-3 col-md-6 d-flex mb-sm-4" >
				<div className="staff">
					<div className="img mb-4 ">
						<img width={'100%'} height={'100%'} src={imgSrc} onError={() => setImgSrc(avatar)} alt="profileImg" />
					</div>
					<div className="info text-center">
						<h3><a href="teacher-single.html">{item.name}</a></h3>
						<span className="position">{item.specilist}</span>
						<div className="text">
							<p>{item.address}</p>
							<ul className="ftco-social">
								<li><a href="#"><span className="icon-twitter"></span></a></li>
								<li><a href="#"><span className="icon-facebook"></span></a></li>
								<li><a href="#"><span className="icon-instagram"></span></a></li>
								<li><a href="#"><span className="icon-google-plus"></span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

function Home() {

	const [doctors, setDoctors] = useState([])

	const getData = async() => {
		const result = await getDoctors()
		setDoctors(result.data)
	}
	useEffect(()=>{
		getData()
	},[])


	return (
		<div>
			<Header />
			<section className="home-slider owl-carousel">
				<div className="slider-item item1">
					<div className="overlay"></div>
					<div className="container">
						<div className="row slider-text align-items-center" data-scrollax-parent="true">
							<div className="col-md-6 col-sm-12" data-scrollax=" properties: { translateY: '70%' }">
								<h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Modern Doctorsry in a Calm and Relaxed Environment</h1>
								<p className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-intro">
				<div className="container">
					<div className="row no-gutters">
						<div className="col-md-3 color-1 p-4">
							<h3 className="mb-4">Emergency Cases</h3>
							<p>A small river named Duden flows by their place and supplies</p>
							<span className="phone-number">+ (123) 456 7890</span>
						</div>
						<div className="col-md-3 color-2 p-4">
							<h3 className="mb-4">Opening Hours</h3>
							<p className="openinghours d-flex">
								<span>Monday - Friday</span>
								<span>8:00 - 19:00</span>
							</p>
							<p className="openinghours d-flex">
								<span>Saturday</span>
								<span>10:00 - 17:00</span>
							</p>
							<p className="openinghours d-flex">
								<span>Sunday</span>
								<span>10:00 - 16:00</span>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-services">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-5">
						<div className="col-md-7 text-center heading-section">
							<h2 className="mb-2">Our Service Keeps you Smile</h2>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 d-flex align-self-stretch">
							<div className="media block-6 services d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-tooth-1"></span>
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Teeth Whitening</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex align-self-stretch">
							<div className="media block-6 services d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-dental-care"></span>
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Teeth Cleaning</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex align-self-stretch">
							<div className="media block-6 services d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-tooth-with-braces"></span>
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Quality Brackets</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 d-flex align-self-stretch">
							<div className="media block-6 services d-block text-center">
								<div className="icon d-flex justify-content-center align-items-center">
									<span className="flaticon-anesthesia"></span>
								</div>
								<div className="media-body p-2 mt-3">
									<h3 className="heading">Modern Anesthetic</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-wrap mt-5">
					<div className="row d-flex no-gutters">
						<div className="col-md-6 img about-2">
						</div>
						<div className="col-md-6 d-flex">
							<div className="about-wrap">
								<div className="heading-section heading-section-white mb-5">
									<h2 className="mb-2">Therapist with a personal touch</h2>
									<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
								</div>
								<div className="list-services d-flex">
									<div className="icon d-flex justify-content-center align-items-center">
										<span className="icon-check2"></span>
									</div>
									<div className="text">
										<h3>Well Experience Doctors</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
								<div className="list-services d-flex">
									<div className="icon d-flex justify-content-center align-items-center">
										<span className="icon-check2"></span>
									</div>
									<div className="text">
										<h3>High Technology Facilities</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
								<div className="list-services d-flex">
									<div className="icon d-flex justify-content-center align-items-center">
										<span className="icon-check2"></span>
									</div>
									<div className="text">
										<h3>Comfortable Clinics</h3>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center mb-5 pb-5">
						<div className="col-md-7 text-center heading-section">
							<h2 className="mb-3">Meet Our Experience Doctors</h2>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences</p>
						</div>
					</div>
					<div className="row">
						{doctors.map((item,index)=>(
							<DoctorCard item={item} key={index} />

						))}
												
					</div>
				</div>
			</section>

			<section className="ftco-section ftco-counter img bg_1" id="section-counter" data-stellar-background-ratio="0.5">
				<div className="container">
					<div className="row d-flex align-items-center">
						<div className="col-md-3 aside-stretch py-5">
							<div className=" heading-section heading-section-white pr-md-4">
								<h2 className="mb-3">Achievements</h2>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</div>
						<div className="col-md-9 py-5 pl-md-5">
							<div className="row">
								<div className="col-md-3 d-flex justify-content-center counter-wrap">
									<div className="block-18">
										<div className="text">
											<strong className="number" data-number="14">0</strong>
											<span>Years of Experience</span>
										</div>
									</div>
								</div>
								<div className="col-md-3 d-flex justify-content-center counter-wrap">
									<div className="block-18">
										<div className="text">
											<strong className="number" data-number="4500">{doctors.length}</strong>
											<span>Qualified Doctors</span>
										</div>
									</div>
								</div>
								<div className="col-md-3 d-flex justify-content-center counter-wrap">
									<div className="block-18">
										<div className="text">
											<strong className="number" data-number="4200">0</strong>
											<span>Happy Smiling Customer</span>
										</div>
									</div>
								</div>
								<div className="col-md-3 d-flex justify-content-center counter-wrap">
									<div className="block-18">
										<div className="text">
											<strong className="number" data-number="320">0</strong>
											<span>Patients Per Year</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="ftco-gallery">
				<div className="container-wrap">
					<div className="row no-gutters">
						<div className="col-md-3">
							<a href="#" className="gallery img d-flex align-items-center gallery-1">
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-search"></span>
								</div>
							</a>
						</div>
						<div className="col-md-3">
							<a href="#" className="gallery img d-flex align-items-center gallery-2">
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-search"></span>
								</div>
							</a>
						</div>
						<div className="col-md-3">
							<a href="#" className="gallery img d-flex align-items-center gallery-3">
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-search"></span>
								</div>
							</a>
						</div>
						<div className="col-md-3">
							<a href="#" className="gallery img d-flex align-items-center gallery-4">
								<div className="icon mb-4 d-flex align-items-center justify-content-center">
									<span className="icon-search"></span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<div id="map"></div>

			<Footer />
		</div>

	)
}
export default Home;