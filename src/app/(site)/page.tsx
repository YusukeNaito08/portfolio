"use client";

import styled from "styled-components";
import { Hero } from "@/components/sections/Hero";
import { TimeLine } from "@/components/sections/TimeLine";
import { WhoAmI } from "@/components/sections/WhoAmI";

const Page = () => {
  return (
    <Wrapper>
      <Hero />
      <WhoAmI />
      <TimeLine />
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;
