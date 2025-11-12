"use client";

export default function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1>An error has occurred 👎🏼</h1>
      <p>{error.message}</p>
    </div>
  );
}
