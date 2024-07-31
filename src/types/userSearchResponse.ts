import { githubUser } from "./githubUser";

export type userSearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: githubUser[];
};
