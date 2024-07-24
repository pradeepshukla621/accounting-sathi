import './Header.css';
import accountingLogo from "./../../assets/images/accounting-sathi-logo.svg"
import callIcon from "./../../assets/images/call-svg.svg"
import arrowIcon from "./../../assets/images/arrow-svg.svg"
import Modal from '../Modal/Modal';

export default function Header(props) {
    return (
        <>
            <div className="wrap-header pt-3">
                <div className="d-flex justify-content-between">
                <div className="logo align-items-center">
                    <img src={accountingLogo} alt="logo" />
                </div>
                <div className="menu">
                    <ul className='d-flex align-items-center justify-content-evenly'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Feature</li>
                        <li>Price</li>
                        <li>Contact Us</li>
                        <li><img src={callIcon} alt="call" />+ 1234 567 865</li>
                        <li className='get-started-btn' onClick={() => props.setShowModal(true)}>
                            Get Started<img src={arrowIcon} alt="arrows" /> </li>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}