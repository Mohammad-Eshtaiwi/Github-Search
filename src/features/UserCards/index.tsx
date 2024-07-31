import { UserCard } from "@/components";
import useGetUsers from "@/reactQuery/useGetUsers";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import UserCardClasses from "@/components/UserCard/user-card.module.scss";

const UserCards = ({ query }: { query: string }) => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetUsers(query);
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
        {/* <UserCard /> */}

        {data?.pages.flatMap((page) =>
          page.users?.items.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
      {!hasNextPage ? <div /> : <div ref={ref} />}
    </>
  );
};

export default UserCards;
