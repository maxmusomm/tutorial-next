"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const handleSubmission = async (formData: FormData) => {
  const session = await auth();
  const user = session?.user;

  if (!session?.user) {
    return redirect("/signup");
  }

  const _title = formData.get("title");
  const _content = formData.get("content");
  const _imageUrl = formData.get("url");
  const _authorName = user?.name;
  const _authorId = session?.user?.id;
  const _authorImage = user?.image;

  if (!_authorId) {
    throw new Error("User is not authenticated or missing id.");
  }

  await prisma.blogPost.create({
    data: {
      title: _title as string,
      content: _content as string,
      imageUrl: _imageUrl as string,
      authorId: _authorId,
      authorName: _authorName as string,
      authorImage: _authorImage as string,
    },
  });

  return redirect("/dashboard");
};
