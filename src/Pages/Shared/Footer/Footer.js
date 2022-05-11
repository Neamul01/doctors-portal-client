import React from 'react';
import footerbg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className='max-w-full max-h-full mx-12'
            style={{
                background: `url(${footerbg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className='footer grid-cols-2 md:p-10 md:pl-32 mt-6 text-gray-700'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href='!#'>Branding</a>
                    <a className="link link-hover" href='!#'>Design</a>
                    <a className="link link-hover" href='!#'>Marketing</a>
                    <a className="link link-hover" href='!#'>Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover" href='!#'>About us</a>
                    <a className="link link-hover" href='!#'>Contact</a>
                    <a className="link link-hover" href='!#'>Jobs</a>
                    <a className="link link-hover" href='!#'>Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href='!#'>Terms of use</a>
                    <a className="link link-hover" href='!#'>Privacy policy</a>
                    <a className="link link-hover" href='!#'>Cookie policy</a>
                </div>
            </div>
            <div className='py-4 mt-8'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;