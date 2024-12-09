import { Link } from 'react-router';
import './LinkPage.css'

export const LinkPage = () => {

    return(
        <>
            <section className="link-page bg-fit d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="title">
                                <h1>Resolving Conflicts Between Designers</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={'/'}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Events Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export const LinkBlogPage = () => {

    return(
        <>
            <section className="link-page bg-fit d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="title">
                                <h1>Resolving Conflicts Between Designers</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={'/'}>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}