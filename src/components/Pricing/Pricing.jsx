import React, { useState } from "react";
import "./Pricing.css"

function Pricing() {

    const [showYearPrice, setShowYearPrice] = useState("year");


    const togglePrice = (value) => {
        // console.log("TogglePrice is Called showYearPrice", value);
        setShowYearPrice(value);
    }
    // console.log("The showYearPrice value is:", showYearPrice);

    return (
        <>
            <div className="pricing-wrapper">
                <div className="pricing-head">
                    <div className="d-flex justify-content-center">
                        <button className="feature-btn "> Pricing </button>
                    </div>
                    <p className="pricing-heading">
                        Our Pricing
                    </p>
                    <p className="pricing-content">
                        At Accupay, we belive in providing clear and flexible pricing options tailored to your business need
                    </p>

                </div>

                <div className="pricing-button">
                    <div className="d-flex justify-content-center position-relative z-3">
                        <button className="monthly-btn" onClick={() => togglePrice("month")}>Monthly</button>
                        <button className="yearly-btn" onClick={() => togglePrice("year")}>Yearly</button>
                    </div>
                </div>

                {showYearPrice === "year" ? (
                    <div className="pricing-card">
{/* Year */}
                        <div className="container cust-container">

                            <div className="row cust-row">

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$500 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                                    </div>
                                </div>

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$1500 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                                    </div>
                                </div>

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$2900 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                ) : (
                    <div className="pricing-card">
{/* Month */}
                        <div className="container cust-container">

                            <div className="row cust-row">

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                                    </div>
                                </div>

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                                    </div>
                                </div>

                                <div className="card col-lg-3 col-md box-shadow cust-card">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>)}

            </div>
        </>
    )


}

export default Pricing;