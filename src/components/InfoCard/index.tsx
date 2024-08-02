import Image from "next/image";
import classNames from "./info-card.module.scss";

const InfoCart = ({
  name,
  imgUrl,
  handleNameClick = () => {},
  handleImgClick = () => {},
}: {
  name: string;
  handleNameClick?: () => void;
  imgUrl: string;
  handleImgClick?: () => void;
}) => {
  return (
    <article className={classNames["info-card"]}>
      <div className={classNames["bg"]} />
      <button onClick={handleImgClick} className={classNames["img-container"]}>
        <Image src={imgUrl} width={96} height={96} alt={name || ""} data-img />
      </button>
      <button onClick={handleNameClick} className="h1" data-name>
        {name}
      </button>
    </article>
  );
};

export default InfoCart;
