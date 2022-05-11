import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-div">
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover" to="/">Branding</Link>
                    <Link className="link link-hover" to="/">Design</Link>
                    <Link className="link link-hover" to="/">Marketing</Link>
                    <Link className="link link-hover" to="/">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title" to="/">Company</span>
                    <Link className="link link-hover" to="/">About us</Link>
                    <Link className="link link-hover" to="/">Contact</Link>
                    <Link className="link link-hover" to="/">Jobs</Link>
                    <Link className="link link-hover" to="/">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title" to="/">Legal</span>
                    <Link className="link link-hover" to="/">Terms of use</Link>
                    <Link className="link link-hover" to="/">Privacy policy</Link>
                    <Link className="link link-hover" to="/">Cookie policy</Link>
                </div>
            </footer>
            <p className="text-center">Copyright &copy; 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;