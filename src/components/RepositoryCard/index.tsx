import repositoryRelatedData from "@/types/repositoryRelatedData";
import Chart from "../Chart";
import classNames from "./repository-card.module.scss";
import Users, { SimpleUsersList } from "../Users";

const RepositoryCard = ({ data }: { data: repositoryRelatedData }) => {
  if (!data) return null;
  const users: SimpleUsersList = data?.[1]?.map((item) => ({
    html_url: item.owner?.html_url,
    avatar_url: item.owner?.avatar_url,
  }));
  return (
    <div className={classNames["repository-card"]}>
      <div className={classNames["chart-container"]}>
        <Chart data={data[0]} />
      </div>
      <h2 className="h3" data-title>
        Forkers
      </h2>
      <Users users={users} />
    </div>
  );
};

export default RepositoryCard;
