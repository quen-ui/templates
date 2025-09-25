import { createFileRoute } from "@tanstack/react-router";
import SignUp from "@/templates/SignUp";

export const Route = createFileRoute("/signup")({
  component: SignUp
});
