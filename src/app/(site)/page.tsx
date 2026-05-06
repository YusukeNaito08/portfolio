"use client";

import styled from "styled-components";
import { Hero } from "@/components/sections/Hero";
import { TimeLine } from "@/components/sections/TimeLine";
import { AboutMe } from "@/components/sections/AboutMe";

const Page = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Hero />
      </LeftContainer>
      <RightContainer>
        <AboutMe />
        <TimeLine />
      </RightContainer>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  height: 100dvh;

  /* ★ SP版: 縦並び（カラム）に変更し、全体の高さをコンテンツに合わせる */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100dvh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* ★ SP版: 幅を100%にし、固定（sticky）を解除。 */
  /* height: 100dvh; はそのまま活かし、スマホでも最初にHeroが画面いっぱいに表示されるようにします */
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    /* HeroセクションのZ-indexを必要に応じて調整し、スクロール時に自然に上に流れるようにします */
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* ★ SP版: 幅を100%にし、内部スクロールとスナップを解除。ページ全体の自然なスクロールに任せる */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow-y: visible;
    scroll-snap-type: none;
  }
`;
