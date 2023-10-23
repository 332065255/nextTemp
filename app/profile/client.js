"use client";
import { GetName } from "@/src/hook/index";
export default function C({ children }) {
  let [count, setCount] = GetName();
  function addCount() {
    console.log("111");
    setCount(count + 1);
  }
  return (
    <div className="root">
      <h1 className="iam-text-2xl md:iam-text-[30px] lg:iam-text-4xl">
        profile
      </h1>
      <p>{count}</p>
      {children}
      <button onClick={addCount}>add</button>
    </div>
  );
}
