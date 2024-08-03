import { InfoCard, RepositoryCard, WithContextProvider } from "@/components";
import UserCardClasses from "@/components/InfoCard/info-card.module.scss";
import Modal from "@/components/Modal";
import { ModalProvider, useModal } from "@/components/Modal/modalContext";
import classNamesUserCard from "@/components/UserCard/user-card.module.scss";
import useGetRepositories from "@/reactQuery/useGetRepositories";
import useGetRepositoryRelatedData from "@/reactQuery/useGetRepositoryRelatedData";
import repository from "@/types/repository";
import repositoryRelatedData from "@/types/repositoryRelatedData";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const RepositoryCards = ({ query }: { query: string }) => {
  const { ref, inView } = useInView();
  const { modalActions } = useModal();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetRepositories(query);
  const [repositoryRelatedDataUrls, setRepositoryRelatedDataUrls] = useState<
    string[] | null
  >(null);

  const { data: repositoryRelatedData } = useGetRepositoryRelatedData(
    repositoryRelatedDataUrls
  );

  useEffect(() => {
    const canIFetchNextNow = inView && !isFetchingNextPage && hasNextPage;
    if (canIFetchNextNow) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const cardClick = (repository: repository) => {
    const urls = [repository.languages_url, repository.forks_url];
    setRepositoryRelatedDataUrls(urls);
    modalActions.openModal();
  };
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
                cardClick(repository);
              }}
              handleNameClick={() => {
                cardClick(repository);
              }}
            />
          ))
        )}
        <div ref={ref}>{isFetchingNextPage && "loading"}</div>

        <Modal>
          <div className={classNamesUserCard.container}>
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
