import './Header.css';
import accountingLogo from "./../../assets/images/accounting-sathi-logo.svg"
import callIcon from "./../../assets/images/call-svg.svg"
import arrowIcon from "./../../assets/images/arrow-svg.svg"
import Modal from '../Modal/Modal';

export default function Header(props) {
    return (
        <>
            {/* <div className="wrap-header pt-3">
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
            </div> */}




            <div className="wrap-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={accountingLogo} alt="logo" />
                            {/* Pradeep */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            {/* me-auto mb-2 mb-lg-0 */}
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://pradeepshukla621.github.io/cv/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Me</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://pradeepshukla621.github.io/tindog/">TinDog</a></li>
                                        <li><a className="dropdown-item" href="https://pradeepshukla621.github.io/cva/Project/index.html">Travel</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>


                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                                <li className="nav-item call-icon"><img src={callIcon} alt="call" />+ 1234 567 865</li>
                                <li className='nav-item get-started-btn' onClick={() => props.setShowModal(true)}>
                                    Get Started<img src={arrowIcon} alt="arrows" /> </li>
                            </ul>



                        </div>
                    </div>
                </nav>
            </div>

            {/* dflmrgrsgsrpgjmrpgjm */}

            {/* <div className="wrap-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={accountingLogo} alt="Logo"  className="d-inline-block align-text-top" />
                       
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Me</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Disabled</a>
                            </li>
                        </ul>
                        <span className="navbar-text d-flex align-item-center ms-3">
                           <p className=''> +1234 567 865 </p>
                        </span>
                        <span className='nav-item get-started-btn ms-3' onClick={() => props.setShowModal(true)}>
                                    Get Started<img src={arrowIcon} alt="arrows" /> </span>
                    </div>
                </div>
            </nav>
            </div> */}





        </>
    )
}