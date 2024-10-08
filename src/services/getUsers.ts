import { userSearchResponse } from "@/types/userSearchResponse";
import extractNextPage from "@/utils/extractNextPage";

export default async function getUsers(
  query: string,
  newLink: string | null = null
) {
  const url = `https://api.github.com/search/users?q=${query}&per_page=27&page=1`;

  const response = await fetch(newLink || url);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const users: userSearchResponse = await response.json();
  const linkHeader = response.headers.get("link");
  const nextLink = linkHeader ? extractNextPage(linkHeader) : null;
  return { users, nextLink };
}
