import React from 'react'
import cover from "../images/cover.png";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage__message">
                <div className="homepage__message-heading">This is</div>
                <div className="homepage__message-heading last">Feedsmart</div>
                <div className="homepage__message-text">We help you collect feedback</div>
                <div className="homepage__message-text">from customers easily</div>
            </div>
            <div className="homepage__image">
                <div><img src={cover} alt="cover pic"/></div>
            </div>
        </div>
    )
}

export default Homepage
