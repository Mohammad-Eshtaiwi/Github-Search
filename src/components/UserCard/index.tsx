import Image from "next/image";
import classNames from "./user-card.module.scss";

const UserCard = () => {
  console.log(classNames);

  return (
    <article className={classNames["user-card"]}>
      <div className={classNames["header"]}>
        <p className="h1">The Octocat</p>
        <p>Joined 25 Jan 2011</p>
        <a href="">@octocat</a>
      </div>
      <p className={classNames["bio"]}>This profile has no bio</p>
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
