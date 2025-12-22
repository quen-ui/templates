import { Outlet, createRootRoute } from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { NotificationInstance } from "@quen-ui/components";
import Footer from "../components/Footer"

export const Route = createRootRoute({
  component: () => (
    <QuenUIProvider theme={QuenUILightTheme}>
      <NotificationInstance />
      <Outlet />
      <Footer />
    </QuenUIProvider>
  )
});
