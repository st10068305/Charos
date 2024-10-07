import Providers from "@/components/providers";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Providers>
        <div className="flex flex-col w-screen h-screen bg-muted">
          <Outlet />
        </div>
      </Providers>
      <TanStackRouterDevtools />
    </>
  ),
});
