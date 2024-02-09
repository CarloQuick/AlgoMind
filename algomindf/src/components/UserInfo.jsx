"use client";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import AddBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={60}
          height={60}
        />
        <div>
          Welcome, <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          <span className="font-bold">{session?.user?.email}</span>
        </div>
        <div>
          Total Points:
          <span className="font-bold">{session?.user?.points}</span>
        </div>
        <AddBtn />
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
``;
