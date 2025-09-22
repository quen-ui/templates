import { useState } from "react";
import {
  Flex,
  Title,
  Text,
  Button,
  TextField,
  Checkbox
} from "@quen-ui/components";
import Logo from "../../LogoWhite.png";
import { LoginPageStyled, LogoContainer, LoginFormStyled } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [blurEmail, setBlurEmail] = useState(false);
  const [blurPassword, setBlurPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  }

  const handleChangePassword = (value: string) => {
    setPassword(value);
  }

  return (
    <LoginPageStyled>
      <LogoContainer direction="column" justify="center" align="center" gap="m">
        <Flex align="center">
          <img src={Logo} alt="logo" width={150} />
          <Title size="2xl">QuenUI</Title>
        </Flex>
        <Title className="center-text" size="l">Welcome to QuenUI Templates</Title>
        <Text className="center-text">
          Utilizing QuenUI, React, TypeScript, Styled-components and Vite.
        </Text>
      </LogoContainer>
      <LoginFormStyled
        direction="column"

        gap="m"
        justify="center"
        align="flex-start">
        <Title size="m">Login</Title>
        <Flex align="center">
          <Text size="s">Don&#39;t have an account?</Text>
          <Button view="link">Create an account here</Button>
        </Flex>
        <TextField
          label="Email"
          error={!email && blurEmail && "Please input your email"}
          onChange={handleChangeEmail}
          onBlur={() => setBlurEmail(true)}
        />
        <TextField
          label="Password"
          error={!password && blurPassword && "Please input your password"}
          onChange={handleChangePassword}
          onBlur={() => setBlurPassword(true)}
        />
        <Checkbox label="Remember me" />
        <Button>Login</Button>
      </LoginFormStyled>
    </LoginPageStyled>
  );
};

export default Login;
