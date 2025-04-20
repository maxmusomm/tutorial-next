import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import BlogPostCard from "@/components/general/BlogPostCard";

interface Posts {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  authorImage: string;
  createdAt: Date;
  updatedAt: Date;
}

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Dashboard = async () => {
  const session = await auth();

  const data = await getData(session?.user?.id as string);
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Your Blog Article</h2>

        <Link href="/dashboard/create" className={buttonVariants()}>
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((posts: Posts) => (
          <BlogPostCard key={posts.id} data={posts} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
