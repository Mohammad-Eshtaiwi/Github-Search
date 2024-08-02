import { InfoCard, WithContextProvider } from "@/components";
import useGetUsers from "@/reactQuery/useGetUsers";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import UserCardClasses from "@/components/InfoCard/info-card.module.scss";
import Modal from "@/components/Modal";
import UserCard from "@/components/UserCard";
import { ModalProvider, useModal } from "@/components/Modal/modalContext";
import useGetData from "@/reactQuery/useGetData";
import { githubUser } from "@/types/githubUser";

const UserCards = ({ query }: { query: string }) => {
  const { ref, inView } = useInView();
  const { modalActions } = useModal();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUsers(query);
  const [userUrl, setUserUrl] = useState("");
  const { data: userData } = useGetData<githubUser>(userUrl);
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
          page.users?.items.map((user) => (
            <InfoCard
              key={user.id}
              imgUrl={user.avatar_url}
              name={user.name || user.login}
              handleImgClick={() => {
                setUserUrl(user.url);
                modalActions.openModal();
              }}
              handleNameClick={() => {
                setUserUrl(user.url);
                modalActions.openModal();
              }}
            />
          ))
        )}
        <div ref={ref}>{isFetchingNextPage && "loading"}</div>
        <Modal>
          <div className="container">
            {userData && <UserCard user={userData} />}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default WithContextProvider(UserCards, ModalProvider);
