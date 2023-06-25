import React from "react";
import { IoMdTrophy } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="values">
      <Slide direction="down">
        <h4>
          My <span className="green">values</span>
        </h4>
        <h1>What I Believe In</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={IoMdTrophy}
            title={"Perseverance"}
            disc={`"Success is not final; failure is not fatal: it is the courage to continue that counts." - Winston Churchill. I believe that with a positive and the right attitude, I can overcome any obstacle, learn everything, and achieve anything. Perseverance also means not resting on my laurels but having the humility to continue improving myself.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaHandshake}
            title={"Respect"}
            disc={`The cornerstone of my values is respect. With respect, I can build trust and rapport with my teammates and clients. With respect, I will listen to and understand the needs of my teammates and clients. With respect, I will be able to communicate my ideas and opinions in a way that is constructive and helpful.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={IoMdArrowForward}
            title={"Forward Looking"}
            disc={`Being able to anticipate change is a valuable skill because I can better prepare myself for the future. Besides being able to anticipate the future, being forward looking also means to be able to learn from the past and apply those lessons learnt to the future. Finally, it also means being able to be innovative so that I can create the future.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
