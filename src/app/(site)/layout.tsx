import styled from "styled-components";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  flex: 1;
`;
