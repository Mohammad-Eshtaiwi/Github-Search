import repository from "./repository";

type repositorySearchResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: repository[];
};

export default repositorySearchResponse;
