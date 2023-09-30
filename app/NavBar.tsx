import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;