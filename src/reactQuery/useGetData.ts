import getData from "@/services/getData";
import { useQuery } from "@tanstack/react-query";

const useGetData = <TData>(url?: string) => {
  const usersQuery = useQuery<TData>({
    queryKey: ["get-data", url],
    queryFn: () => getData(url!),

    enabled: !!url,
    staleTime: 120000,
  });
  return { ...usersQuery };
};

export default useGetData;
