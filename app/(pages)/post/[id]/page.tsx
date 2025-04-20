import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
async function getDate(_id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: _id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

const IdPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await getDate(id);
  return (
    <>
      <div className="max-w-3xl mx-auto py-8 px-4">
        <Link className={buttonVariants({ variant: "secondary" })} href={"/"}>
          Back to posts
        </Link>
        <div className="mb-8 mt-6">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {data.title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="relative size-10 overflow-hidden rounded-full">
                <img
                  src={data.authorImage}
                  alt={data.authorName}
                  className="object-cover"
                />
              </div>
              <p className="font-medium"> {data.authorName}</p>
            </div>
            <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(data.createdAt)}
            </p>
          </div>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden mb-8 rounded=lg">
          <img
            src={data.imageUrl}
            alt="Image on the post"
            className="object-cover"
            width={1000}
          />
        </div>
        <Card>
          <CardContent>
            <p className="prose ">{data.content}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default IdPage;
