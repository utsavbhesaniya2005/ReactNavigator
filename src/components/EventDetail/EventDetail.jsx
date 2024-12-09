import './EventDetail.css'

const EventDetail = () => {

    return(
        <>
            <section className="event-detail">
                <div className="container">
                    <div className="row justify-content-center row-gap-4">
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-sm-11 col-12">
                            <div className="event-information">
                                <a className="rating d-flex align-items-center column-gap-4 mb-3">
                                    <span className="rounded-pill">Development</span>
                                    <div className="reviews d-flex align-items-center column-gap-1">
                                        <i className="fa-solid fa-star"></i>
                                        <span>(4.8 Reviews)</span>
                                    </div>
                                </a>
                                <h2 className="mb-3">How To Become idiculously Self-Aware In 20 Minutes</h2>
                                <ul className="d-flex align-items-center justify-content-start column-gap-5">
                                    <li>
                                        <a href="#">
                                            <img src="../src/assets/images/Event-Details-Page/guest-image.png" className="img-fluid" alt="Guest Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><span>By</span> David Millar</a>
                                    </li>
                                    <li>
                                        <a href="#" className="position-relative">
                                            <i className="fa-solid fa-location-dot me-2"></i>
                                            <span>LocationWashington DC, MI 2726</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="position-relative">
                                            <i className="fa-solid fa-graduation-cap me-2"></i>
                                            <span>2,250 Students</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="event-overview mt-4">
                                    <div className="event-title">
                                        <h4>Event Overview</h4>
                                    </div>
                                    <div className="event-desc">
                                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="event-overview mt-4">
                                    <div className="event-title mb-3">
                                        <h4>What you'll learn in this event?</h4>
                                    </div>
                                    <div className="event-desc">
                                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                    </div>
                                </div>
                                <div className="elements d-flex column-gap-5">
                                    <div className="element-img">
                                        <img src="../src/assets/images/Event-Details-Page/event-image.png" className="rounded-4 img-fluid" alt="Event Image" />
                                    </div>
                                    <div className="elements-desc">
                                        <div className="event-title my-4">
                                            <h4>Four major elements that we offer
                                                for this event</h4>
                                        </div>
                                        <ul className="d-flex flex-column row-gap-3 justify-content-start">
                                            <li>
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right me-4"></i>
                                                    <span>Work with color & Gradients & Grids</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right me-4"></i>
                                                    <span>All the useful shortcuts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right me-4"></i>
                                                    <span>Be able to create Flyers, Brochures, Advertisements</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right me-4"></i>
                                                    <span>How to work with Images & Text</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="event-overview mt-4">
                                    <div className="event-desc">
                                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="subscription">
                                <div className="card shadow p-4" style={{width: "18rem"}}>
                                    <div className="card-body p-0">
                                        <div className="fee rounded-2">
                                            <p className="text-white m-0">Event Fee</p>
                                            <h3 className="text-white mt-1 mb-0">$19.00</h3>
                                        </div>
                                        <div className="event-info mt-4">
                                            <h6>Event Information</h6>
                                            <ul className="mt-3 d-flex flex-column row-gap-4">
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-regular fa-calendar me-2"></i>
                                                            <span>Date</span>
                                                        </div>
                                                        <div className="time">26/08/2024</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-regular fa-clock me-2"></i>
                                                            <span>Start Time</span>
                                                        </div>
                                                        <div className="time">10.00am</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-solid fa-book me-2"></i>
                                                            <span>Topics</span>
                                                        </div>
                                                        <div className="time">12</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-solid fa-puzzle-piece me-2"></i>
                                                            <span>Quizzes</span>
                                                        </div>
                                                        <div className="time">145</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-solid fa-certificate me-2"></i>
                                                            <span>Certifications</span>
                                                        </div>
                                                        <div className="time">Yes</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="d-flex justify-content-between align-items-center pb-2" href="#">
                                                        <div className="info">
                                                            <i className="fa-solid fa-graduation-cap me-2"></i>
                                                            <span>Total Seat</span>
                                                        </div>
                                                        <div className="time">300</div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>Secure Payment:</span>
                                                        <div className="payment-img">
                                                            <img src="../src/assets/images/Event-Details-Page/payment-desc.png" className="mt-2 img-fluid" alt="Payment Description" />
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="social-media">
                                                <span>Share This Course:</span>
                                                <ul className="d-flex align-items-center justify-content-start column-gap-2 social-media mt-2 pb-4">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-whatsapp"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-youtube"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a className="btn-1 my-3 text-white" href="#">
                                                <span>Join This Event</span>
                                                <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default EventDetail;