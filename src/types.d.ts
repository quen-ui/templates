import { IQuenUITheme } from "@quen-ui/theme";

declare module "styled-components" {
  export interface DefaultTheme extends IQuenUITheme {}
}

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    getTitle?: () => string
  }
}
