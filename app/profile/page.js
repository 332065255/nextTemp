import style from "./style.css";
export default function P() {
  console.log(JSON.stringify(style));
  return (
    <div className="root">
      <h1 className="iam-text-2xl md:iam-text-[30px] lg:iam-text-4xl">
        profile
      </h1>
    </div>
  );
}
