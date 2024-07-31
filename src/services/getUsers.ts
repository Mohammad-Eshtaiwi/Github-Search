import extractNextPage from "@/utils/extractNextPage";

export default async function getUsers(query: string) {
  const url = `https://api.github.com/search/users?q=${query}&per_page=10&page=1`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const users = await response.json();
    const linkHeader = response.headers.get("link");
    const nextLink = linkHeader ? extractNextPage(linkHeader) : null;
    return { users, nextLink };
  } catch (error) {
    console.error("Error:", error);
    return {};
  }
}
