import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { NotificationInstance, Layout } from "@quen-ui/components";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    console.log(location);
    return (
      <QuenUIProvider theme={QuenUILightTheme}>
        <NotificationInstance />
        <Layout>
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <Layout.Sidebar />
          )}
          <Layout.Content>
            <Outlet />
          </Layout.Content>
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          )}
        </Layout>
      </QuenUIProvider>
    );
  }
});
