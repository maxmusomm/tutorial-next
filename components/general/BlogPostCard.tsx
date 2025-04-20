import React from "react";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogPostCard = ({ data }: IappProps) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow hover:shadow-md transistion-all hover:shadow-lg">
        <Link href={`/post/${data.id}`} className="block w-full h-full">
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={data.imageUrl}
              alt="Image"
              className="object-cover transition-transform duration-300 group-hover::scale-105"
            />
          </div>

          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-grey-900">
              {data.title}
            </h3>

            <p className="mb-4 text-sm text-gray-600 line-clamp-2">
              {data.content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="relative size-8 overflow-hidden rounded-full">
                  <img
                    src={data.authorImage}
                    alt={data.authorName}
                    className="object-cover transition-transform duration-300 group-hover::scale-105"
                  />
                </div>
                <p className="text-sm">{data.authorName}</p>
              </div>
              <time className="text-sm text-gray-600">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(data.createdAt)}
              </time>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogPostCard;
