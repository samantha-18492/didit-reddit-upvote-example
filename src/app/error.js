"use client";

import { signIn } from "next-auth/react";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>We&apos;re sorry. An error has occurred 👎🏼</h1>
      <p>Please make sure you&apos;re signed in to continue</p>
      <button
        onClick={() => signIn("github")}
        className="bg-pink-300 p-2 rounded hover:bg-zinc-300 mt-10 "
      >
        Sign in
      </button>
    </div>
  );
}
