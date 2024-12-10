import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import './GridDetails.css'

const blogPosts = [
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-4.png",
    },
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-5.png",
    },
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-6.png",
    },
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-7.png",
    },
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-8.png",
    },
    {
        title: "What we are capable to usually discovered",
        date: "20 July, 2024",
        author: "by Admin",
        category: "Agency",
        imageSrc: "../src/assets/images/Latest-Blogs-Page/agency-img-9.png",
    },
];

const GridDetails = () => {

    const [key, setKey] = useState('one');

    return(

        <>
            <section className="grid">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-11">
                                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 justify-content-center">
                                        <Tab className="tab-pane fade mb-5 grid-link" eventKey="one" title="1">
                                            <div className="row row-gap-4">
                                                {blogPosts.map((post, index) => (
                                                    <div className="col-4" key={index}>
                                                        <div className="card p-3 pb-4 rounded-4" style={{ border: '1px solid rgba(181, 181, 195, 1)' }}>
                                                            <div className="card-img rounded-4">
                                                            <img src={post.imageSrc} className="card-img-top" alt="Blog Image" />
                                                            <span className="rounded-pill">{post.category}</span>
                                                            </div>
                                                            <div className="card-body blog-body">
                                                            <div className="blog-details d-flex align-items-center column-gap-3 pb-4 pt-2">
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-calendar"></i>
                                                                <span>{post.date}</span>
                                                                </a>
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-circle-user"></i>
                                                                <span>{post.author}</span>
                                                                </a>
                                                            </div>
                                                            <h5 className="card-title grid-title">{post.title}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab>
                                        <Tab className="tab-pane fade mb-5" eventKey="two" title="2">
                                            <div className="row row-gap-4">
                                                {blogPosts.map((post, index) => (
                                                    <div className="col-4" key={index}>
                                                        <div className="card p-3 pb-4 rounded-4" style={{ border: '1px solid rgba(181, 181, 195, 1)' }}>
                                                            <div className="card-img rounded-4">
                                                            <img src={post.imageSrc} className="card-img-top" alt="Blog Image" />
                                                            <span className="rounded-pill">{post.category}</span>
                                                            </div>
                                                            <div className="card-body blog-body">
                                                            <div className="blog-details d-flex align-items-center column-gap-3 pb-4 pt-2">
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-calendar"></i>
                                                                <span>{post.date}</span>
                                                                </a>
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-circle-user"></i>
                                                                <span>{post.author}</span>
                                                                </a>
                                                            </div>
                                                            <h5 className="card-title grid-title">{post.title}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab>
                                        <Tab className="tab-pane fade mb-5" eventKey="three" title="3">
                                            <div className="row row-gap-4">
                                                {blogPosts.map((post, index) => (
                                                    <div className="col-4" key={index}>
                                                        <div className="card p-3 pb-4 rounded-4" style={{ border: '1px solid rgba(181, 181, 195, 1)' }}>
                                                            <div className="card-img rounded-4">
                                                            <img src={post.imageSrc} className="card-img-top" alt="Blog Image" />
                                                            <span className="rounded-pill">{post.category}</span>
                                                            </div>
                                                            <div className="card-body blog-body">
                                                            <div className="blog-details d-flex align-items-center column-gap-3 pb-4 pt-2">
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-calendar"></i>
                                                                <span>{post.date}</span>
                                                                </a>
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-circle-user"></i>
                                                                <span>{post.author}</span>
                                                                </a>
                                                            </div>
                                                            <h5 className="card-title grid-title">{post.title}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab>
                                        <Tab className="tab-pane fade mb-5" eventKey="four" title="4">
                                            <div className="row row-gap-4">
                                                {blogPosts.map((post, index) => (
                                                    <div className="col-4" key={index}>
                                                        <div className="card p-3 pb-4 rounded-4" style={{ border: '1px solid rgba(181, 181, 195, 1)' }}>
                                                            <div className="card-img rounded-4">
                                                            <img src={post.imageSrc} className="card-img-top" alt="Blog Image" />
                                                            <span className="rounded-pill">{post.category}</span>
                                                            </div>
                                                            <div className="card-body blog-body">
                                                            <div className="blog-details d-flex align-items-center column-gap-3 pb-4 pt-2">
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-calendar"></i>
                                                                <span>{post.date}</span>
                                                                </a>
                                                                <a href="#" className="d-flex align-items-center column-gap-2">
                                                                <i className="fa-regular fa-circle-user"></i>
                                                                <span>{post.author}</span>
                                                                </a>
                                                            </div>
                                                            <h5 className="card-title grid-title">{post.title}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="rightside-grid">
                                <div className="search-bar">
                                    <form action="">
                                        <input type="text" placeholder="Search here" className="form-control rounded-3" />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </form>
                                </div>

                                <div className="categories mt-4 p-3 rounded-3">
                                    <h5 className="pb-2">Categories</h5>
                                    <ul className="d-flex flex-column align-items-start row-gap-3">
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Art & Design</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Business</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Data Science</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Development</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Finance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Health & Fitness</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-angle-right"></i>
                                                <span className="ps-2">Lifestyle</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="latest-post mt-4 p-3 rounded-3">
                                    <h5 className="pb-2">Latest Post</h5>
                                    <ul className="d-flex flex-column align-items-start row-gap-4">
                                        <li>
                                            <a href="#">
                                                <div className="posts d-flex justify-content-start column-gap-3">
                                                    <div className="post-img">
                                                        <img src="../src/assets/images/Latest-Blogs-Page/latest-post-1.jpg" alt="Latest Post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="#">
                                                            <i className="fa-regular fa-calendar"></i>
                                                            <span className="ps-1">April 13, 2024</span>
                                                        </a>
                                                        <h6 className="pt-3">The Right Learning Path For Your</h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="posts d-flex justify-content-start column-gap-3">
                                                    <div className="post-img">
                                                        <img src="../src/assets/images/Latest-Blogs-Page/latest-post-2.jpg" alt="Latest Post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="#">
                                                            <i className="fa-regular fa-calendar"></i>
                                                            <span className="ps-1">April 13, 2024</span>
                                                        </a>
                                                        <h6 className="pt-3">The Growing Need
                                                        Management</h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="posts d-flex justify-content-start column-gap-3">
                                                    <div className="post-img">
                                                        <img src="../src/assets/images/Latest-Blogs-Page/latest-post-3.jpg" alt="Latest Post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="#">
                                                            <i className="fa-regular fa-calendar"></i>
                                                            <span className="ps-1">April 13, 2024</span>
                                                        </a>
                                                        <h6 className="pt-3">The Right Learning Path For Your</h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="posts d-flex justify-content-start column-gap-3">
                                                    <div className="post-img">
                                                        <img src="../src/assets/images/Latest-Blogs-Page/latest-post-4.jpg" alt="Latest Post" />
                                                    </div>
                                                    <div className="post-text">
                                                        <a href="#">
                                                            <i className="fa-regular fa-calendar"></i>
                                                            <span className="ps-1">April 13, 2024</span>
                                                        </a>
                                                        <h6 className="pt-3">The Growing Need
                                                            Management</h6>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tags mt-4 p-3 rounded-3">
                                    <h5 className="pb-2">Tags</h5>
                                    <ul className="d-flex flex-wrap row-gap-4 column-gap-1">
                                        <li>
                                            <a href="#">Education</a>
                                        </li>
                                        <li>
                                            <a href="#">Training</a>
                                        </li>
                                        <li>
                                            <a href="#">Online</a>
                                        </li>
                                        <li>
                                            <a href="#">Learn</a>
                                        </li>
                                        <li>
                                            <a href="#">Course</a>
                                        </li>
                                        <li>
                                            <a href="#">LMS</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default GridDetails;