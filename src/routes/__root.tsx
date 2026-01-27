import {
  Outlet,
  useLocation,
  createRootRoute,
  Link
} from "@tanstack/react-router";
import {
  QuenUIProvider,
  QuenUILightTheme,
  QuenUIDarkTheme
} from "@quen-ui/theme";
import {
  NotificationInstance,
  Layout,
  Image,
  Flex,
  Title
} from "@quen-ui/components";
import { LIGHT_THEME_NAME, SIDEBAR_MENU_ITEMS, THEME_KEY } from "@/constants";
import LogoImg from "../assets/Logo.png";
import { LayoutSidebarStyled } from "@/components/LayoutSidebar";
import { Footer } from "@/components/Footer";
import {
  LayoutContentStyled,
  PageWrapperStyled,
  LayoutStyled
} from "@/components/LayoutContent";
import PageHeader from "@/components/PageHeader";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    const theme = localStorage.getItem(THEME_KEY);
    return (
      <QuenUIProvider
        theme={theme === LIGHT_THEME_NAME ? QuenUILightTheme : QuenUIDarkTheme}>
        <NotificationInstance />
        <LayoutStyled>
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <LayoutSidebarStyled menuItems={SIDEBAR_MENU_ITEMS}>
              <Link to="/">
                <Flex gap="s" justify="center" align="center">
                  <Image src={LogoImg} width={48} height={48} />
                  <Title size="s">QuenUI</Title>
                </Flex>
              </Link>
            </LayoutSidebarStyled>
          )}
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <PageHeader />
          )}
          <LayoutContentStyled isFooter={!["/login", "/signup", "/"].includes(location.pathname)}>
            {["/login", "/signup", "/"].includes(location.pathname) ? (
              <Outlet />
            ) : (
              <PageWrapperStyled>
                <Outlet />
              </PageWrapperStyled>
            )}
          </LayoutContentStyled>
          {!["/login", "/signup", "/"].includes(location.pathname) && (
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          )}
        </LayoutStyled>
      </QuenUIProvider>
    );
  }
});
