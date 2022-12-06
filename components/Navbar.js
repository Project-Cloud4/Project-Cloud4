import Link from "next/link";

export default function Navbar() {
  const Links = [
    {
      linkname: "Our projects",
      linkref: "/projects",
    },
    {
      linkname: "Contact",
      linkref: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 border-base-200 border-b-2">
      <div className="flex-1">
        <label className="circle avatar ">
          <div className="w-10 rounded-full">
            <img src="/logopc4.png" />
          </div>
        </label>
        <Link href="/">
          <button className="btn btn-ghost text-xl font-mono">
            Project Cloud4
          </button>
        </Link>
      </div>
      <div>
        <ul className="menu menu-horizontal  ">
          {Links.map((link) => {
            return (
              <li key={link.linkname}>
                <Link href={link.linkref}>
                  <button className="text-xl font-mono rounded-lg">
                    {link.linkname}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
