import styled from "styled-components";

export const Hero = () => {
  return (
    <Wrapper>
      <Title>Frontend Developer</Title>
      <Subtitle>welcome to my page.</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #111;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
`;
