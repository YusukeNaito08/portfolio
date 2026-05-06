import styled from "styled-components";

export const Hero = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100svh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111;
`;
