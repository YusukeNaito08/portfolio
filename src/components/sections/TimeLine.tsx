"use client";

import styled from "styled-components";
import { useTimeline } from "@/hooks/useTimeLine";
import { TimelineItem } from "@/types/timeline";

const AUTHOR_NAME = "noye";
const AUTHOR_AVATAR = "/avatar.jpeg";

const rtf = new Intl.RelativeTimeFormat("ja", { numeric: "auto" });

const formatRelative = (iso: string) => {
  const diffMs = new Date(iso).getTime() - Date.now();
  const diffMin = Math.round(diffMs / (1000 * 60));
  const diffHour = Math.round(diffMs / (1000 * 60 * 60));
  const diffDay = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (Math.abs(diffMin) < 60) return rtf.format(diffMin, "minute");
  if (Math.abs(diffHour) < 24) return rtf.format(diffHour, "hour");
  return rtf.format(diffDay, "day");
};

export const TimeLine = () => {
  const { data, loading, error } = useTimeline();

  if (loading)
    return (
      <Wrapper id="logs">
        <State>Loading...</State>
      </Wrapper>
    );
  if (error)
    return (
      <Wrapper id="logs">
        <State>Error: {error}</State>
      </Wrapper>
    );
  if (!data) return null;

  return (
    <Wrapper id="logs">
      <Title>Logs.</Title>
      <Description>Dev logs, daily experiments, and technical articles.</Description>
      <ListContainer>
        <List>
          {data.map((item) => {
            const isExternal = item.source === "ZENN";
            const href = isExternal ? item.url : `/blog/${item.slug}`;

            return (
              <Card key={item.id}>
                <CardLink href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <CardTitle>{item.title}</CardTitle>
                  <Meta>
                    <Avatar src={AUTHOR_AVATAR} alt="" />
                    <AuthorName>{AUTHOR_NAME}</AuthorName>
                    <PublishedAt>{formatRelative(item.publishedAt)}</PublishedAt>
                    <SourceBadge $source={item.source}>{item.source}</SourceBadge>
                  </Meta>
                </CardLink>
              </Card>
            );
          })}
        </List>
      </ListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100dvh;
  scroll-snap-align: start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;

  @media (max-width: 768px) {
    height: auto;
    scroll-snap-align: none;
    padding: 4rem 5% 6rem;
    justify-content: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111;
  margin-bottom: 0.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const State = styled.p`
  color: #666;
  font-size: 1.25rem;
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  max-height: 60vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  padding-bottom: 2rem;

  @media (max-width: 768px) {
    max-height: none;
    overflow-y: visible;
    padding-bottom: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.li`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d1d5db;
    background: #fdfdfd;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const CardLink = styled.a`
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: #666;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #eee;
`;

const AuthorName = styled.span`
  color: #333;
  font-weight: 600;
`;

const PublishedAt = styled.span`
  color: #888;
`;

const SourceBadge = styled.span<{ $source: TimelineItem["source"] }>`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: ${({ $source }) => ($source === "ZENN" ? "#eff6ff" : "#f3f4f6")};
  color: ${({ $source }) => ($source === "ZENN" ? "#2563eb" : "#4b5563")};
`;
