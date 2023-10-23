import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/profile">to profile</Link>
    </main>
  );
}
