"use client";

import Link from "next/link";
import useSWR from "swr";
import { useMemo } from "react";

import type { HomeEntry } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function getYear(date: string): number {
  return new Date(date).getFullYear();
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="external-link-icon"
      fill="none"
      height="12"
      viewBox="0 0 24 24"
      width="12"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Posts({ entries: initialEntries }: { entries: HomeEntry[] }) {
  const { data, mutate } = useSWR<{ entries: HomeEntry[] }>("/api/posts/", fetcher, {
    fallbackData: { entries: initialEntries },
    refreshInterval: 10000,
  });

  const entries = useMemo(() => data?.entries ?? initialEntries, [data?.entries, initialEntries]);
  const trackCuratedClick = (id: string) => {
    const endpoint = `/api/views/${encodeURIComponent(id)}/`;
    void fetch(endpoint, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => {
        if (!payload?.viewsFormatted) return;
        mutate(
          (current) => {
            if (!current) return current;
            return {
              entries: current.entries.map((entry) =>
                entry.id === id
                  ? {
                      ...entry,
                      views:
                        typeof payload.views === "number"
                          ? payload.views
                          : typeof entry.views === "number"
                            ? entry.views + 1
                            : 0,
                      viewsFormatted: payload.viewsFormatted,
                    }
                  : entry,
              ),
            };
          },
          { revalidate: false },
        );
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="posts-table">
        {entries.map((entry, index) => {
          const year = getYear(entry.date);
          const previousYear = entries[index - 1] ? getYear(entries[index - 1].date) : null;
          const shouldShowYear = previousYear !== year;

          return (
            <article className="post-row" key={entry.id}>
              <div className="post-year">{shouldShowYear ? year : ""}</div>
              <div className="post-main">
                <div className="post-title">
                  {entry.kind === "post" ? (
                    <Link href={`/${entry.slug}/`}>{entry.title}</Link>
                  ) : (
                    <a href={entry.url} rel="noreferrer" target="_blank" onClick={() => trackCuratedClick(entry.id)}>
                      {entry.title}
                    </a>
                  )}
                </div>
                <div className="post-entry-meta">
                  {entry.tags.map((tag) => (
                    <small key={`${entry.id}-${tag}`}>{tag}</small>
                  ))}
                  {entry.kind !== "post" ? <ExternalLinkIcon /> : null}
                </div>
              </div>
              <div className="post-views">{entry.viewsFormatted ?? "0"}</div>
            </article>
          );
        })}
      </div>
    </>
  );
}
