import { profile } from "@/data/profile";
import type { GithubActivityDay, GithubStats } from "@/types";

function buildFallbackActivity(): GithubActivityDay[] {
  const days: GithubActivityDay[] = [];
  const start = new Date("2025-08-18T00:00:00.000Z");

  for (let i = 0; i < 371; i += 1) {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + i);
    const weekday = date.getUTCDay();
    const wave = Math.sin(i / 9);
    const weekendPenalty = weekday === 0 || weekday === 6 ? 0.35 : 1;
    const count = Math.max(0, Math.round((wave + 1) * 2.2 * weekendPenalty));
    days.push({
      date: date.toISOString().slice(0, 10),
      count,
    });
  }

  return days;
}

/**
 * Static fallback only. Live GitHub API can be added later without changing the section UI.
 */
export const githubStats: GithubStats = {
  username: profile.githubUsername,
  repos: 0,
  contributions: 0,
  activity: buildFallbackActivity(),
  source: "static-fallback",
};
