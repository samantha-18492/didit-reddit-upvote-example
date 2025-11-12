"use client";

import { signIn } from "next-auth/react";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>We&apos;re sorry. An error has occurred 👎🏼</h1>
      <p>Please make sure you&apos;re signed in to continue</p>
      <button onClick={() => signIn("github")}>Sign in</button>
    </div>
  );
}
