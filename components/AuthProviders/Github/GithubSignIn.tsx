import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button variant={"destructive"} type="submit">
        Signin with GitHub
      </Button>
    </form>
  );
}
