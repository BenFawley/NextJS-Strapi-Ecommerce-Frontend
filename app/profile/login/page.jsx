"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {session.status === "loading" && <p>Loading....</p>}
      {session.status === "unauthenticated" && (
        <Link className="bg-black text-white" href="/api/auth/signin">
          Sign In
        </Link>
      )}

      {session.status === "authenticated" && (
        <Link href="/api/auth/signout">Sign Out</Link>
      )}
    </div>
  );
};

export default LoginPage;
