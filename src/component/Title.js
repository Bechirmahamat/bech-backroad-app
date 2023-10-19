import React from "react";

const Title = ({ title, next }) => {
    return (
        <div className="section-title">
            <h2>
                {title} <span>{next}</span>
            </h2>
        </div>
    );
};

export default Title;
