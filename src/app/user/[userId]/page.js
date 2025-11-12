import { db } from "@/db";
import Link from "next/link";
import Image from "next/image";

export default async function UserPage({ params }) {
  const { userId } = await params;
  console.log(`The userId = ${userId}`);

  const query = await db.query(`SELECT * FROM users WHERE id = $1`, [userId]);
  const user = query.rows[0];
  console.log(`The user = ${user}`);

  const data = await db.query(`SELECT * FROM posts WHERE user_id = $1`, [
    user.id,
  ]);
  const posts = data.rows;

  console.log(`The posts = ${posts}`);

  return (
    <>
      <div className="flex flex-col mt-5 gap-10">
        <h1 className="text-3xl">{user.name}&apos;s profile</h1>
        <Image src={user.image} alt="" height={100} width={100} />
        <div className="flex flex-col">
          <h2 className="text-2xl">Contributions:</h2>
          <p className="mb-5">
            Click on any of the posts below to be redirected to that thread
          </p>
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                href={`/post/${post.id}`}
                className="underline"
              >
                Post #{post.id} {post.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
}
