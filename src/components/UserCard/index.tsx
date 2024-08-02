import Image from "next/image";
import classNames from "./user-card.module.scss";
import { githubUser } from "@/types/githubUser";
import formatDate from "@/utils/formatDate";

const noBio = `This profile has no bio`;
const notAvailable = `Not Available`;

const UserCard = ({ user }: { user: githubUser }) => {
  return (
    <article className={classNames["user-card"]}>
      <div className={classNames["header"]}>
        <Image
          src={user?.avatar_url}
          width={120}
          height={120}
          alt={user?.name || ""}
          data-img
        />
        <div data-metadata>
          <p className="h1" data-name>
            {user?.name || user?.login}
          </p>
          <p data-date>
            Joined At{" "}
            {user.created_at ? formatDate(user.created_at) : "Who knows"}
          </p>
          <a href={user?.html_url} target="_blank" data-url>
            @{user.login}
          </a>
        </div>
        <p className={classNames["bio"]} data-bio>
          {user.bio || noBio}
        </p>
      </div>
      <ul className={classNames["statistics"]}>
        <li className="h2">
          <span data-header>Repos</span>
          <span data-value>{user.public_repos}</span>
        </li>
        <li className="h2">
          <span data-header>Followers</span>
          <span data-value>{user.followers}</span>
        </li>
        <li className="h2">
          <span data-header>Following</span>
          <span data-value>{user.following}</span>
        </li>
      </ul>
      <ul className={classNames["find-me"]}>
        <li>
          <Image
            width={14}
            height={20}
            alt="location"
            src={"assets/icon-location.svg"}
          />
          <span data-value>{user.location || notAvailable}</span>
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="twitter"
            src={"assets/icon-twitter.svg"}
          />
          <span data-value>{user.twitter_username || notAvailable}</span>
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="website"
            src={"assets/icon-website.svg"}
          />
          <span data-value>{user.blog || notAvailable}</span>
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="company"
            src={"assets/icon-company.svg"}
          />
          <span data-value>{user.company || notAvailable}</span>
        </li>
      </ul>
    </article>
  );
};

export default UserCard;
