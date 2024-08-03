import { InfoCard, RepositoryCard, WithContextProvider } from "@/components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import UserCardClasses from "@/components/InfoCard/info-card.module.scss";
import Modal from "@/components/Modal";
import { ModalProvider, useModal } from "@/components/Modal/modalContext";
import useGetRepositories from "@/reactQuery/useGetRepositories";
import useGetData from "@/reactQuery/useGetData";
import { githubUser } from "@/types/githubUser";
import UserCard from "@/components/UserCard";
import useGetRepositoryRelatedData from "@/reactQuery/useGetRepositoryRelatedData";
// import Chart from "@/components/Chart";
import repositoryRelatedData from "@/types/repositoryRelatedData";

const RepositoryCards = ({ query }: { query: string }) => {
  const { ref, inView } = useInView();
  const { modalActions } = useModal();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRepositories(query);
  const [userUrl, setUserUrl] = useState("");
  const [repositoryRelatedDataUrls, setRepositoryRelatedDataUrls] = useState<
    string[] | null
  >(null);

  const { data: userData } = useGetData<githubUser>(userUrl);
  const { data: repositoryRelatedData } = useGetRepositoryRelatedData(
    repositoryRelatedDataUrls
  );

  console.log({ repositoryRelatedData });

  useEffect(() => {
    const canIFetchNextNow = inView && !isFetchingNextPage && hasNextPage;
    if (canIFetchNextNow) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <>
      <div className={UserCardClasses.container}>
        {data?.pages.flatMap((page) =>
          page.repositories?.items.map((repository) => (
            <InfoCard
              key={repository.id}
              imgUrl={repository.owner?.avatar_url!}
              name={repository.name}
              handleImgClick={() => {
                // setUserUrl(repository.owner?.url!);
                modalActions.openModal();
              }}
              handleNameClick={() => {
                const urls = [repository.languages_url, repository.forks_url];

                setRepositoryRelatedDataUrls(urls);
                modalActions.openModal();
              }}
            />
          ))
        )}
        <div ref={ref}>{isFetchingNextPage && "loading"}</div>

        <Modal>
          <div className="container">
            {/* {userData && <UserCard user={userData} />} */}
            {repositoryRelatedData && (
              <RepositoryCard
                data={repositoryRelatedData as repositoryRelatedData}
              />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default WithContextProvider(RepositoryCards, ModalProvider);
