import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { QuenUIProvider, QuenUILightTheme } from "@quen-ui/theme";
import { NotificationInstance, Layout, Image, Flex, Title } from "@quen-ui/components";
import { SIDEBAR_MENU_ITEMS } from "@/constants";
import LogoImg from "../assets/Logo.png";
import { LayoutSidebarStyled } from "@/components/LayoutSidebar"
import Footer from "@/components/Footer";
import { LayoutContentStyled } from "@/components/LayoutContent";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    return (
      <QuenUIProvider theme={QuenUILightTheme}>
        <NotificationInstance />
        <Layout>
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <LayoutSidebarStyled menuItems={SIDEBAR_MENU_ITEMS}>
              <Flex gap="s" justify="center" align="center">
                <Image src={LogoImg} width={48} height={48} />
                <Title size="s">QuenUI</Title>
              </Flex>
            </LayoutSidebarStyled>
          )}
          <LayoutContentStyled>
            <Outlet />
          </LayoutContentStyled>
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
