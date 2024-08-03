import getRepositories from "@/services/getRepositories";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetRepositories = (query: string) => {
  const repositoriesQuery = useInfiniteQuery({
    queryKey: ["get-repositories", query],
    queryFn: ({ pageParam }: { pageParam: null | string }) =>
      getRepositories(query, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextLink;
    },
    enabled: !!query,
    staleTime: 120000,
  });
  return { ...repositoriesQuery };
};

export default useGetRepositories;
