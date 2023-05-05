import React from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export const Carousel = ({ data }) => {
  return (
    <div className="carousel">
    <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className="slide" />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
            return <button className="indicator" key={idx} onClick={null}></button>
        })}
      </span>
    </div>
  );
};
