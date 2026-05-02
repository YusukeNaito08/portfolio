"use client";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <Title>Home</Title>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111;
`;
