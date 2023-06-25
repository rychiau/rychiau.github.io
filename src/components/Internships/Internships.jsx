import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./InternshipsSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import getconsulting from "../../assets/getconsulting.png";
import hdb from "../../assets/hdb.png";
import ync from "../../assets/ync.png";

let clients = [
  {
    name: "GET Strategy Consulting",
    position: "Strategy Consulting Intern",
    img_url: getconsulting,
    stars: 3,
    disc: `Worked on two Go-To-Market projects and one Corporate Finance project. Learnt to use Excel and Powerpoint for coming up with weekly slide decks.`,
  },
  {
    name: "Housing and Development Board",
    position: "Product Management Intern",
    img_url: hdb,
    stars: 4,
    disc: `Product Manager for an internal work routing system used by more than 5000 of HDB's employees. Leveraged technology to improve existing workflows.`,
  },
  {
    name: "Yale-NUS College",
    position: "Research Assistant",
    img_url: ync,
    stars: 5,
    disc: `Worked on a research project on the impact of the repeal of Prohibition in the United States under Prof David Jacks. Learnt to use Stata and Excel to clean large data sets during data analysis.`,
  },
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="internships">
      <Slide direction="left">
        <h4>
          My <span className="green">internships</span>
        </h4>
        <h1>What I learnt and did</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    // text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
