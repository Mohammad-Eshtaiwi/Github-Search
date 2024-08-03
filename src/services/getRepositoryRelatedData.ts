import repositoryRelatedDataType from "@/types/repositoryRelatedData";

export default async function getRepositoryRelatedData(urls: string[]) {
  const fetchRequests = urls.map((url) => fetch(url));

  const responses = await Promise.all(fetchRequests);

  const repositoryRelatedData = await Promise.all(
    responses.map((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
  );

  return repositoryRelatedData as repositoryRelatedDataType;
}
