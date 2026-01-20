import { useLocation, useMatches } from "@tanstack/react-router";
import { useTheme } from "@quen-ui/theme";
import { Avatar, Badge, Button, Flex, Title } from "@quen-ui/components";
import SearchHeader from "@/components/SearchHeader";
import { IconBell } from "@tabler/icons-react";
import { PagedHeaderStyled } from "./styles";

const PageHeader = () => {
  const theme = useTheme();
  const location = useLocation();
  const matches = useMatches();
  return (
    <PagedHeaderStyled height="64px">
      <Title size="m">
        {matches
          .find((m) => m.pathname === location.pathname)
          ?.staticData?.getTitle?.()}
      </Title>
      <Flex gap="m" align="center">
        <SearchHeader />
        <Badge text={2} size="xs">
          <Button view="icon" size="s">
            <IconBell width={24} height={24} color={theme.colors.violet[9]} />
          </Button>
        </Badge>
        <Avatar name="Martin Jonson" />
      </Flex>
    </PagedHeaderStyled>
  );
};

export default PageHeader;
