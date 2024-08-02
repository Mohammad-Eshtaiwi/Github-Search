import getUsers from "@/services/getUsers";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const useGetUsers = (query: string) => {
  const usersQuery = useInfiniteQuery({
    queryKey: ["get-users", query],
    queryFn: ({ pageParam }: { pageParam: null | string }) =>
      getUsers(query, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextLink;
    },
    enabled: !!query,
    staleTime: 120000,
  });
  return { ...usersQuery };
};

export default useGetUsers;
