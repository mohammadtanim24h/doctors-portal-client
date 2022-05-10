import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: `url(${footer})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="p-10"
        >
            <div className="footer md:flex justify-around text-base">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="#value" className="link link-hover">
                        Branding
                    </a>
                    <a href="#value" className="link link-hover">
                        Design
                    </a>
                    <a href="#value" className="link link-hover">
                        Marketing
                    </a>
                    <a href="#value" className="link link-hover">
                        Advertisement
                    </a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="#value" className="link link-hover">
                        About us
                    </a>
                    <a href="#value" className="link link-hover">
                        Contact
                    </a>
                    <a href="#value" className="link link-hover">
                        Jobs
                    </a>
                    <a href="#value" className="link link-hover">
                        Press kit
                    </a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="#value" className="link link-hover">
                        Terms of use
                    </a>
                    <a href="#value" className="link link-hover">
                        Privacy policy
                    </a>
                    <a href="#value" className="link link-hover">
                        Cookie policy
                    </a>
                </div>
            </div>
            <div className="text-center mt-12">
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
