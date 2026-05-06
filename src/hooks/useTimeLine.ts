import { useEffect, useState } from "react";
import { TimelineItem } from "@/types/timeline";

export const useTimeline = () => {
  const [data, setData] = useState<TimelineItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // クリーンアップ用のコントローラー
    const controller = new AbortController();

    const run = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!base) throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");

        const res = await fetch(`${base}/api/timeline`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = (await res.json()) as TimelineItem[];
        setData(json);
      } catch (e) {
        if ((e as Error).name === "AbortError") return;

        setError((e as Error).message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    run();

    return () => controller.abort();
  }, []);

  return { data, loading, error };
};
