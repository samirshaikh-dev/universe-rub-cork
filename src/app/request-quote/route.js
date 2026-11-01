import { redirect } from "next/navigation";

export function GET() {
  redirect("/contact#request-a-quote");
}

