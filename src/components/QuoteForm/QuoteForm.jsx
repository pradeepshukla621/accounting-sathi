import React from "react";
import "./QuoteForm.css";

function QuoteForm() {
    return (
        <>
            <div className="quote-wrapper">
                <div className="container">

                    <form action="">

                    <p className="quote-title">Get a Free Quote</p>

                    <div className="form-input">
                    <div className="quote-input-box">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="quote-input-box">
                        <input type="email" placeholder="Email" required />
                    </div>
                    </div>

                    <div className="form-input">
                    <div className="quote-input-box">
                        <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="quote-input-box">
                        <input type="text" placeholder="Service" required />
                    </div>
                    </div>

                    <div className="text-message">
                        <textarea className="text-area" id="" name="w3review" placeholder="Message" rows="4" cols="50" resize="none" required></textarea>
                    </div>

                    <div className="submit-form">
                    <input className="submit-button btn btn-outline-light" type="submit"/>
                    </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default QuoteForm