import React, { useState } from "react";
import styled from "styled-components";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const clickHandler = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value); // Check the response data
        setJoke(data.value);
        setButtonClicked(true);
      })
      .catch((error) => {
        console.error(error); // Check for any fetch errors
      });
  };

  return (
    <Container>
      <Button onClick={clickHandler}>
        {buttonClicked ? "Click me again!" : "Click me!"}
      </Button>
      {joke && <p>{joke}</p>}
    </Container>
  );
};

export default Joke;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 1rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Button = styled.div`
  width: 6rem;
  height: 2.5rem;
  background-color: #01be96;
  border: none;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 5px #01be9551);
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
  color: black;
`;
