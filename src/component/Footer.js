import React from "react";
import { linkData, Icons } from "../data";
const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {linkData.map((data) => {
                    return (
                        <li key={data.id}>
                            <a href={data.href} className="footer-link">
                                {data.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="footer-icons">
                {Icons.map((icon) => {
                    return (
                        <li key={icon.id}>
                            <a
                                href={icon.href}
                                target="_blank"
                                className="footer-icon"
                                rel="noreferrer"
                            >
                                <i className={icon.icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span>{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;
