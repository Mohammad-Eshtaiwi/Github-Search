import getRepositoryRelatedData from "@/services/getRepositoryRelatedData";
import { useQuery } from "@tanstack/react-query";

const useGetRepositoryRelatedData = (urls?: string[] | null) => {
  const usersQuery = useQuery({
    queryKey: ["get-repository-related-data", ...(urls || [])],
    queryFn: () => getRepositoryRelatedData(urls!),

    enabled: !!urls?.length,
    staleTime: 120000,
  });
  return { ...usersQuery };
};

export default useGetRepositoryRelatedData;
