import {
  Flex,
  Text,
  Title,
  Card,
  Avatar,
  Button,
  Image,
  Divider
} from "@quen-ui/components";
import { IconCheck, IconSettings, IconStar } from "@tabler/icons-react";
import {
  MainPageStyled,
  MainPageFooterStyled,
  CardTestimonialStyled,
  MainPageFooterDescriptionStyled,
  MainPageFooterNavigationStyled
} from "./styles";
import LogoImg from "../../assets/Logo.png";
import LogoWhiteImg from "../../assets/LogoWhite.png";

const MainPage = () => {
  return (
    <MainPageStyled direction="column" gap="xl" align="center">
      <Image src={LogoImg} width={150} height={150} />
      <Title size="xl">QuenUI Templates</Title>
      <Text size="xl" style={{ textAlign: "center" }}>
        Get started quickly with pre-build UI kits in React + TypeScript, <br />{" "}
        perfect for startups and developers
      </Text>
      <Flex gap="l">
        <Button className="main-button" size="l">
          Browse templates
        </Button>
        <Button className="main-button" view="secondary" size="l">
          View code
        </Button>
      </Flex>
      <Title size="l">Features</Title>
      <Flex gap="l" wrap="wrap" justify="center">
        <Card title="Feature #1" leftContent={<IconCheck />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi.
        </Card>
        <Card title="Feature #2" leftContent={<IconSettings />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi.
        </Card>
        <Card title="Feature #3" leftContent={<IconStar />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi.
        </Card>
      </Flex>
      <Title size="l">Testimonials</Title>
      <Flex gap="l" wrap="wrap" justify="center">
        <CardTestimonialStyled
          title="Testimonial #1"
          leftContent={<Avatar name="John Doe" label />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          laoreet dui ut fermentum facilisis. Quisque leo nibh, malesuada eget
          condimentum a, porta a lacus. Nam non ipsum nisi.
        </CardTestimonialStyled>
        <CardTestimonialStyled
          title="Testimonial #2"
          leftContent={<Avatar name="Anna Smith" label />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          laoreet dui ut fermentum facilisis. Quisque leo nibh, malesuada eget
          condimentum a, porta a lacus. Nam non ipsum nisi.
        </CardTestimonialStyled>
      </Flex>
      <MainPageFooterStyled justify="space-between" direction="column">
        <MainPageFooterDescriptionStyled
          direction="column"
          justify="center"
          wrap="wrap">
          <Flex align="flex-end" justify="center" gap="xs">
            <Title size="l">QuenUI</Title>
            <Text size="l">
              offers high-quality UI templates for developers and
            </Text>
          </Flex>
          <Flex align="flex-end" justify="center">
            <Text size="l">
              startups, designed for quick and effortless product development
            </Text>
          </Flex>
        </MainPageFooterDescriptionStyled>
        <MainPageFooterNavigationStyled gap="l">
          <Flex direction="column" align="center">
            <Image src={LogoWhiteImg} width={64} height={64} />
            <Title size="m" color="white">
              QuenUI
            </Title>
          </Flex>
          <Flex
            direction="column"
            justify="space-between"
            className="footer__content">
            <Flex gap="l" justify="end">
              <Flex direction="column">
                <Title size="xs">Templates</Title>
                <Button as="a" size="s" view="link">Dashboard</Button>
              </Flex>
              <Flex direction="column">
                <Title size="xs">Resources</Title>
                <Button size="s" as="a" view="link" href="https://quen-ui.github.io/quen-ui">Official site QuenUI</Button>
                <Button size="s" as="a" view="link" href="https://github.com/quen-ui/quen-ui">Github UI Lib</Button>
                <Button size="s" as="a" view="link" href="https://github.com/quen-ui/templates">Github Templates</Button>
              </Flex>
            </Flex>
            <Divider direction="horizontal" view="disabled" />
            <Flex justify="space-between" align="flex-end">
              <Text size="xs">©2025-2026 QuenUI</Text>
              <Button
                view="icon"
                as="a"
                href="https://quen-ui.github.io/quen-ui/"
                target="_blank">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                  width={24}
                  height={24}
                  alt="github"
                />
              </Button>
            </Flex>
          </Flex>
        </MainPageFooterNavigationStyled>
      </MainPageFooterStyled>
    </MainPageStyled>
  );
};

export default MainPage;
