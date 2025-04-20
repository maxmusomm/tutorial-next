import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SignOut from "@/components/AuthProviders/SignOut";
import { type User } from "next-auth";

const Navbar = ({
  authenticated,
  user,
}: {
  authenticated: boolean;
  user: User | undefined;
}) => {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1>
            Blog <span className="text-blue-500">Marshel</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className={
              "text-sm font-medium  hover:text-blue-500 hover:underline transition-colors duration-300 ease-in-out"
            }
            href={"/"}
          >
            Home
          </Link>
          {authenticated ? (
            <Link
              className={
                "text-sm font-medium  hover:text-blue-500 hover:underline transition-colors duration-300 ease-in-out"
              }
              href={"/dashboard"}
            >
              Dashboard
            </Link>
          ) : (
            <> </>
          )}
        </div>
      </div>

      {!authenticated ? (
        <div className="flex items-center gap-4">
          <Link href={"/login"}>
            <Button className="cursor-pointer">Login</Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant="destructive" className="cursor-pointer">
              Sign up
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="font-extrabold text-3xl">{user?.name}</h1>
          <SignOut />
        </>
      )}
    </nav>
  );
};

export default Navbar;
