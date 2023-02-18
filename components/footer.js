import ViewSourceCode from "./viewSourceCode";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 mb-5 flex items-center justify-center space-x-5">
      <div>
        <Link href="/about">
          <a className="text-white hover:underline">About</a>
        </Link>
      </div>
      <div className="text-white ">&#8226;</div>
      <div>
        <ViewSourceCode />
      </div>
    </footer>
  );
}
