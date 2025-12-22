import { Flex, Text, Title, Card, Avatar, Button, Image } from "@quen-ui/components";
import { IconCheck, IconSettings, IconStar } from "@tabler/icons-react";
import { MainPageStyled, MainPageFooterStyled } from "./styles";
import LogoImg from "../../assets/Logo.png";

const MainPage = () => {
  return (
    <MainPageStyled direction="column" gap="xl" align="center">
      <Image src={LogoImg} width={412} height={412} />
      <Title size="xl">QuenUI Templates</Title>
      <Text size="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat
        volutpat erat, sed lobortis diam gravida nec. Cras odio dolor, varius
        sed eros id, vulputate ultricies quam. Nulla eu lacus sed enim aliquam
        dictum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Curabitur non pulvinar nunc. Ut
        mollis facilisis metus eu ullamcorper.
      </Text>
      <Button className="main-button" size="l">Dashboard</Button>
      <Title size="l">Features</Title>
      <Flex gap="l" wrap="wrap">
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
      <Flex gap="l">
        <Card
          title="Testimonial #1"
          leftContent={<Avatar name="John Doe" label />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          laoreet dui ut fermentum facilisis. Quisque leo nibh, malesuada eget
          condimentum a, porta a lacus. Nam non ipsum nisi. Pellentesque in
          ullamcorper mi. Proin sit amet rhoncus ante, id lobortis lacus.
          Aliquam lobortis hendrerit erat, quis feugiat ex pulvinar et.
        </Card>
      </Flex>
      <MainPageFooterStyled justify="space-between">
        <Flex direction="column">
          <Title size="s">Contact</Title>
          <Text>(123)456-7890</Text>
        </Flex>
        <Flex direction="column">
          <Title size="s">Links</Title>
          <Button view="link">Dashboard</Button>
        </Flex>
      </MainPageFooterStyled>
    </MainPageStyled>
  );
};

export default MainPage;
