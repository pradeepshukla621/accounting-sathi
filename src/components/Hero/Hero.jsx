import "./Hero.css"
import bannerImage from "../../assets/images/banner-svg.svg"
import pingdomImage from "../../assets/images/pingdom-hero.svg"

export default function Hero(props) {

    return (
        <>
            <div className="">
                
                <div className="row wrap-hero d-flex align-item-center justify-content-between">
                    <div className="col-lg banner-content">
                        <h2>Welcome to Accounting Sathi!</h2>
                        <h1> Smart Solution. </h1>
                        <h1>Smart Accounting</h1>
                        <p>Accounting Sathi: Your stress-free solution for financial management.
                            Simplifies accounting, accurate, user-friendly. Smooth sailing, not headaches.
                        </p>

                        <button className="banner-btn" onClick={() => props.setShowModal(true)}>Get Started</button>
                    </div>
                    <div className="col-lg banner-img">
                        <img className="bimage" src={bannerImage} alt="banner-svg" />
                    </div>

                </div>

                <div className="row wrap-hero-footer d-flex justify-content-between mt-5">
                    <div className="col-lg hero-footer-content">
                        <p> 15,000+  <span className="hero-footer-text">businesses from small startups to household names </span></p>

                    </div>
                    <div className="col-lg hero-footer-image">
                        <img className="pindom-img" src={pingdomImage} alt="hero-footer-svg" />
                    </div>
                </div>

                <hr />

            </div>

        </>
    )
}