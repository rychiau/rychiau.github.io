import React from "react";
import styled from "styled-components";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import mugshot from "../../assets/mugshot.png";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Greetings! <span className="green">I am</span>
          </h4>
          <h1 className="green">Chiau Ren Yu</h1>
          <h3>Liberal Arts Student and Day Trader</h3>
          <p>
            I am a student at Yale NUS College, Singapore. I am currently
            pursuing a major in Philosophy, Politics and Economics (PPE) and a
            minor in Computer Science. I am also a day trader, and I trade
            stocks on the US stock market.
          </p>
          <p style={{ marginTop: "1rem" }}>
            I am interested in the intersection of technology, finance, and
            politics. I believe that such understanding is necessary to have a
            better idea of where different tickers will be six or twelve months
            out.
          </p>
          <p style={{ marginTop: "1rem" }}>
            In my free time, I enjoy cycling, playing frisbee, and reading. Some
            of my hobbies that I took it to the competition level includes
            bagpiping (led my secondary school pipe band in the Boys' Brigade
            Pipes and Drums Festival 2014), and contract bridge (represented my
            college in the NUS Inter College Games 2022).
          </p>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://www.youtube.com/channel/UCy1AEIG84Vftpdty2HjEnCg">
                  <AiOutlineYoutube />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/ren-yu-chiau-5616b11ba">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={mugshot} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 15rem; /* Set the width of the component */
    height: auto; /* Set the height to auto to maintain the aspect ratio */
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;

    @media (max-width: 790px) {
      width: 90%;
    }

    @media (max-width: 660px) {
      width: 80%;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-20px);
  }
`;
