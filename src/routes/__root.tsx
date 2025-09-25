import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { NotificationInstance } from "@quen-ui/components";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";
import Footer from "../components/Footer"

export const Route = createRootRoute({
  component: () => (
    <QuenUIProvider theme={QuenUILightTheme}>
      <NotificationInstance />
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
      <Footer />
    </QuenUIProvider>
  )
});
