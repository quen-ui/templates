import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: () => (
    <QuenUIProvider theme={QuenUILightTheme}>
      <Outlet />
      <TanstackDevtools
        config={{
          position: "bottom-left"
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />
          }
        ]}
      />
    </QuenUIProvider>
  )
});
