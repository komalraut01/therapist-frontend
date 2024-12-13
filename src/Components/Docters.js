import React, { useEffect, useState } from "react";
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

function Doctors() {
	const [data, setData] = useState([])

	const getData = async () => {
		const result = await getDoctors()
		setData(result.data)
	}
	useEffect(() => {
		getData()
	}, [])

	return (

		<div>
			<Header />



			<section className="home-slider owl-carousel">
				<div className="slider-item bread-item bg_1" data-stellar-background-ratio="0.5">
					<div className="overlay"></div>
					<div className="container" data-scrollax-parent="true">
						<div className="row slider-text align-items-end">
							<div className="col-md-7 col-sm-12 mb-5">
								<p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>Services</span></p>
								<h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">Well Experienced Doctors</h1>
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
						{data.map((item, index) => (
							<DoctorCard item={item} key={index} />

						))}

					</div>
				</div>
			</section>

			<Footer />
		</div>

	)
}
export default Doctors;
