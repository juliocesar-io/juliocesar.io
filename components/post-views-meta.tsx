"use client";

import { useEffect, useRef } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function PostViewsMeta({ postId, defaultViews }: { postId: string; defaultViews: string }) {
  const { data, mutate } = useSWR<{ views: number; viewsFormatted: string }>(`/api/views/${encodeURIComponent(postId)}/`, fetcher, {
    fallbackData: { views: Number(defaultViews.replace(/,/g, "")) || 0, viewsFormatted: defaultViews },
    refreshInterval: 15000,
  });
  const didIncrementRef = useRef(false);

  useEffect(() => {
    if (didIncrementRef.current) return;
    didIncrementRef.current = true;
    fetch(`/api/views/${encodeURIComponent(postId)}/`, { method: "POST" })
      .then((res) => res.json())
      .then((payload) => {
        if (payload?.viewsFormatted) {
          mutate(payload, false);
        }
      })
      .catch(() => {});
  }, [mutate, postId]);

  return <>{data?.viewsFormatted ?? defaultViews} views</>;
}
