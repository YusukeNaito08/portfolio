type TimeLineItemBase = {
  id: number;
  source: "INTERNAL" | "ZENN";
  title: string;
  summary: string;
  publishedAt: string;
};

type InternalItem = TimeLineItemBase & {
  source: "INTERNAL";
  slug: string;
};

type ZennItem = TimeLineItemBase & {
  source: "ZENN";
  url: string;
};

export type TimelineItem = InternalItem | ZennItem;
