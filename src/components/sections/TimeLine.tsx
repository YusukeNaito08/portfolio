import styled from "styled-components";

export const TimeLine = () => {
  return (
    <Wrapper>
      <Title>TimeLine</Title>
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

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: #111;
`;
