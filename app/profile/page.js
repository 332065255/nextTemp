"use client";

import style from "./style.css";
import Name from "./name";
import Client from "./client";
import { GetName } from "@/src/hook/index";
export default function P() {
  let [count, setCount] = GetName();
  return (
    <>
      <Client>
        <Name name={"Gao" + count} />
      </Client>
    </>
  );
}
