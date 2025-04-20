"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button className="w-full" type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </Button>
    </>
  );
};

export default SubmitButton;
