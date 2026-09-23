import TelemetryContent from "@/components/ui/TelemetryContent";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

async function getGithubData() {
  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch("https://api.github.com/users/sakshar2303", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/sakshar2303/repos?per_page=100", {
        next: { revalidate: 3600 },
      }),
      fetch("https://github-contributions-api.jogruber.de/v4/sakshar2303?y=last", {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return null;
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    const languages: Record<string, number> = {};

    for (const repo of repos) {
      totalStars += repo.stargazers_count;
      totalForks += repo.forks_count;
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    }

    const topLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);

    let contributions: ContributionDay[] = [];
    let totalContributions = 0;
    if (contribRes.ok) {
      const contribData: ContributionsResponse = await contribRes.json();
      contributions = contribData.contributions;
      totalContributions = contribData.total.lastYear;
    }

    return {
      publicRepos: user.public_repos,
      totalStars,
      totalForks,
      topLanguages,
      contributions,
      totalContributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

export default async function Telemetry() {
  const data = await getGithubData();

  if (!data) {
    return null;
  }

  return <TelemetryContent {...data} />;
}
