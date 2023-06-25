import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import platformgame from "../../assets/platformgame.png";
import websiteV1 from "../../assets/websiteV1.png";
import legendarb from "../../assets/legendarb.png";
import i2ds from "../../assets/i2ds.png";
import reactlogo from "../../assets/reactlogo.png";

let data = [
  {
    img: platformgame,
    disc: "Developed this using Java and Android Studio as part of my group's final project for our Software Engineering class. Inspiration for this game was from Super Mario Bros.",
  },
  {
    img: websiteV1,
    disc: "Developed this using HTML, CSS, and Javascript. This was my first website I created for my personal portfolio.",
  },
  {
    img: legendarb,
    disc: "Tasked to come up with a forecasting model for AAPL stock prices within 24 hours as part of take home assignment for quantitative analyst position at a quantitative trading firm.",
  },
  {
    img: i2ds,
    disc: "Used Pandas and Scikit-learn to create a model that predicts the pound for pound squat class of weightlifters using age, bodyweight, best 3 deadlifts, etc.",
  },
  {
    img: reactlogo,
    disc: "Developed this using React.js and styled-components. Built off using template from Milad Amiri. This is my current website I am using for my personal portfolio.",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;