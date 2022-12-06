import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-base-200 border-b-2">
      <div className="flex-1">
        <label className="circle avatar ">
          <div className="w-10 rounded-full">
            <img src="/logopc4.png" />
          </div>
        </label>
        <Link href="/">
          <button className="btn btn-ghost text-xl font-mono ">
            Project Cloud4
          </button>
        </Link>
      </div>
      <div>
        <ul className="menu menu-horizontal  ">
          <li>
            <Link href="/projects">
              <button className="text-xl font-mono rounded-lg">
                Our projects
              </button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="text-xl font-mono rounded-lg">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
