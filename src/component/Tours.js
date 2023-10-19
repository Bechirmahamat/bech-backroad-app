import React from "react";
import Title from "./Title";
import { ArticleTours } from "../data";
const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" next="tours" />

            <div className="section-center featured-center">
                {ArticleTours.map((tour) => {
                    return (
                        <article className="tour-card" key={tour.id}>
                            <div className="tour-img-container">
                                <img
                                    src={tour.img}
                                    className="tour-img"
                                    alt=""
                                />
                                <p className="tour-date">{tour.date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{tour.title}</h4>
                                </div>
                                <p>{tour.text}</p>
                                <div className="tour-footer">
                                    <p>
                                        <span>
                                            <i className="fas fa-map"></i>
                                        </span>
                                        {tour.contry}
                                    </p>
                                    <p>{tour.day}</p>
                                    <p>{tour.price}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
