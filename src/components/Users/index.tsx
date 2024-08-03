import Image from "next/image";
import classNames from "./users.module.scss";

export type SimpleUsersList = {
  html_url: string | undefined;
  avatar_url: string | undefined;
}[];
const Users = ({ users }: { users: SimpleUsersList }) => {
  return (
    <ul className={classNames.users}>
      {users.map((item) => {
        return (
          <li key={item.html_url}>
            <a target="_blank" href={item.html_url}>
              <Image width={48} height={48} src={item.avatar_url!} alt="user" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
