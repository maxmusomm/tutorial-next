import { signOut } from "@/auth";
import { buttonVariants } from "@/components/ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className={` cursor-pointer ${buttonVariants({
          variant: "destructive",
        })} `}
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
}
