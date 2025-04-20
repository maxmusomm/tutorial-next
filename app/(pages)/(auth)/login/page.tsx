import GithubSignIn from "@/components/AuthProviders/Github/GithubSignIn";
import { Button } from "@/components/ui/button";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <h2 className="text-2xl font-bold mb-6">Login to your account</h2>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* Google Sign In Placeholder */}
        <Button variant="outline" type="button" disabled>
          Sign in with Google (Coming Soon)
        </Button>
        {/* GitHub Sign In */}
        <GithubSignIn />
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-2 text-gray-400 text-xs">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>
        {/* Email/Password Form */}
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
