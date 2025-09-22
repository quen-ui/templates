import { createFileRoute } from '@tanstack/react-router'
import Login from "../templates/Login"

export const Route = createFileRoute('/login')({
  component: Login,
});
