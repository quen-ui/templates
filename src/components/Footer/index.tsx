import { Button, Text } from "@quen-ui/components";
import { FooterWrapper } from "./styles";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <FooterWrapper align="center" justify="center" gap="s">
      <Text>© 2025 QuenUI</Text>
      <Button
        view="icon"
        as="a"
        href="https://quen-ui.github.io/quen-ui/"
        target="_blank">
        <img src={Logo} width={38} height={38} alt="QuenUI Logo" />
      </Button>
      <Button
        view="icon"
        as="a"
        href="https://github.com/quen-ui/templates"
        target="_blank">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
          width={32}
          height={32}
          alt="GitHub Logo"
        />
      </Button>
    </FooterWrapper>
  );
};

export default Footer;
