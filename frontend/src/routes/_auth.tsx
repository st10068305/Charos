import AuthGuard from "@/components/guards/auth";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: () => (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  ),
});
