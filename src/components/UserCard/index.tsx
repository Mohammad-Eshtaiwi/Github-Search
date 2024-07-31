import Image from "next/image";
import classNames from "./user-card.module.scss";
import { githubUser } from "@/types/githubUser";

const UserCard = ({ user }: { user: githubUser }) => {
  return (
    <article className={classNames["user-card"]}>
      <div className={classNames["header"]}>
        <Image
          src={user.avatar_url}
          width={120}
          height={120}
          alt={user.name || ""}
          data-img
        />
        <div data-metadata>
          <p className="h1" data-name>
            {user.name || user.login}
          </p>
          <p data-date>Joined 25 Jan 2011</p>
          <a href={user.url} data-url>
            @octocat
          </a>
        </div>
        <p className={classNames["bio"]} data-bio>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>
      </div>
      <ul className={classNames["statistics"]}>
        <li className="h2">
          <span data-header>Repos</span>
          <span>8</span>
        </li>
        <li className="h2">
          <span data-header>Followers</span>
          <span>8</span>
        </li>
        <li className="h2">
          <span data-header>Following</span>
          <span>9</span>
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
          San Francisco
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="twitter"
            src={"assets/icon-twitter.svg"}
          />
          Not Available
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="website"
            src={"assets/icon-website.svg"}
          />
          https://github.blog
        </li>
        <li>
          <Image
            width={14}
            height={20}
            alt="company"
            src={"assets/icon-company.svg"}
          />
          San Francisco
        </li>
      </ul>
    </article>
  );
};

export default UserCard;
