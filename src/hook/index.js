import { useState } from "react";
export function GetName() {
  let [count, setCount] = useState(0);
  return [count, setCount];
}
