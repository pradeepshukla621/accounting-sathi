import React from "react";
import "./Footer.css"
import accountingLogo from "./../../assets/images/accounting-sathi-logo.svg"

function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="container">
                    <footer className="pt-5 ">
                        <div className="row">
                            <div className="col-12 col-md">
                                <img className="mb-2" src={accountingLogo} alt="" width="197" height="43" />
                                <p>Your trusted partner in accounting and payroll solutions. We deliver precision, efficiency, and tailored services</p>
                                <small className="d-block mb-3 cust-text-muted">© 2017-2018</small>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Features</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="cust-text-muted" href="#">Cool stuff</a></li>
                                    <li><a className="cust-text-muted" href="#">Random feature</a></li>
                                    <li><a className="cust-text-muted" href="#">Team feature</a></li>
                                    <li><a className="cust-text-muted" href="#">Stuff for developers</a></li>
                                    <li><a className="cust-text-muted" href="#">Another one</a></li>
                                    <li><a className="cust-text-muted" href="#">Last time</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Resources</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="cust-text-muted" href="#">Resource</a></li>
                                    <li><a className="cust-text-muted" href="#">Resource name</a></li>
                                    <li><a className="cust-text-muted" href="#">Another resource</a></li>
                                    <li><a className="cust-text-muted" href="#">Final resource</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>About</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="cust-text-muted" href="#">Team</a></li>
                                    <li><a className="cust-text-muted" href="#">Locations</a></li>
                                    <li><a className="cust-text-muted" href="#">Privacy</a></li>
                                    <li><a className="cust-text-muted" href="#">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;