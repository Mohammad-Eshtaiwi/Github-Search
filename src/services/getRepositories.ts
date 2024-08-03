import repositorySearchResponse from "@/types/repoSearchResponse";
import extractNextPage from "@/utils/extractNextPage";

export default async function getRepositories(
  query: string,
  newLink: string | null = null
) {
  const url = `https://api.github.com/search/repositories?q=${query}&per_page=27&page=1`;

  try {
    const response = await fetch(newLink || url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const repositories: repositorySearchResponse = await response.json();
    const linkHeader = response.headers.get("link");
    const nextLink = linkHeader ? extractNextPage(linkHeader) : null;
    return { repositories, nextLink };
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
}
