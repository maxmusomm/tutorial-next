import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/general/SubmitButton";
import { handleSubmission } from "@/lib/actions";

const CreateBlogRoute = () => {
  return (
    <>
      <div>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>
              Create a new post to share with the world
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" action={handleSubmission}>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Title</Label>
                <Input name="title" placeholder="Title" required />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Content</Label>
                <Textarea name="content" placeholder="Content" required />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <Label>Image url</Label>
                <Input name="url" placeholder="Image url" required />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CreateBlogRoute;
