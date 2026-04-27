"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Nav>
        <NavList>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </NavList>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  padding: 0 2rem;
  border-bottom: 1px solid #e5e5e5;
`;

const Nav = styled.nav`
  max-width: 960px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 0.95rem;

  &:hover {
    color: #000;
  }
`;
