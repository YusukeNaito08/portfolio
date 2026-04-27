import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styled from "styled-components";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  flex: 1;
`;
