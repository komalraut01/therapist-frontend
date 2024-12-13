import React from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
function About() {
  return (

    <div>

      <Header />

      <section className="home-slider owl-carousel">
        <div className="slider-item bread-item bg_1" data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 mb-5">
                <p className="breadcrumbs" data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
                <h1 className="mb-3" data-scrollax=" properties: { translateY: '70%', opacity: .9}">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-md-6 img about-image order-md-last about">
            </div>
            <div className="col-md-6 pr-md-5 order-md-first">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div className="nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-whatwedo-tab" data-toggle="pill" href="#v-pills-whatwedo" role="tab" aria-controls="v-pills-whatwedo" aria-selected="true">What we do</a>

                    <a className="nav-link" id="v-pills-mission-tab" data-toggle="pill" href="#v-pills-mission" role="tab" aria-controls="v-pills-mission" aria-selected="false">Our mission</a>

                    <a className="nav-link" id="v-pills-goal-tab" data-toggle="pill" href="#v-pills-goal" role="tab" aria-controls="v-pills-goal" aria-selected="false">Our goal</a>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">

                  <div className="tab-content" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-whatwedo" role="tabpanel" aria-labelledby="v-pills-whatwedo-tab">
                      <div>
                        <h2 className="mb-4">We Offer High Quality Services</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
                      <div>
                        <h2 className="mb-4">To Accomodate All Patients</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="v-pills-goal" role="tabpanel" aria-labelledby="v-pills-goal-tab">
                      <div>
                        <h2 className="mb-4">Help Our Customers Needs</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section-2">
        <div className="container-wrap">
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
                    <h3>Well Experience Dentist</h3>
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

      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section">
              <h2 className="mb-2">Testimony</h2>
              <span className="subheading">Our Happy Customer Says</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5 person_1">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5 person_2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5 person_3">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Dennis Green</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5 person_1">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Dennis Green</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5 person_1">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      <p className="name">Dennis Green</p>
                      <span className="position">System Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <strong className="number" data-number="4500">0</strong>
                      <span>Qualified Dentist</span>
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

      <Footer />
    </div>
  )
}
export default About;
