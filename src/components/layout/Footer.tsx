"use client";

import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <p>© {new Date().getFullYear()}</p>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  padding: 0 2rem;
  border-top: 1px solid #e5e5e5;
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.85rem;
    color: #999;
  }
`;
