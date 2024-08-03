import classNames from "./loader.module.css"
export default function Loader() {
  return (
    <div className={classNames.loader}>
      <span>|</span>
      <span style={{ "--delay": " 0.1s" }}>|</span>
      <span style={{ "--delay": "0.3s" }}>|</span>
      <span style={{ "--delay": "0.4s" }}>|</span>
      <span style={{ "--delay": " 0.5s" }}>|</span>
    </div>
  );
}
