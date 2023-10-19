import React from "react";
import logo from "../images/logo.svg";
import { linkData, Icons } from "../data";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {linkData.map((data) => {
                        return (
                            <li key={data.id}>
                                <a href={data.href} className="nav-link">
                                    {data.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    {Icons.map((icon) => {
                        return (
                            <li key={icon.id}>
                                <a
                                    href={icon.href}
                                    target="_blank"
                                    className="nav-icon"
                                    rel="noreferrer"
                                >
                                    <i className={icon.icon}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
