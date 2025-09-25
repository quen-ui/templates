import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Flex,
  Title,
  Text,
  Button,
  TextField,
  Select,
  notifications
} from "@quen-ui/components";
import Logo from "../../LogoWhite.png";
import { SignUpPageStyled, LogoContainer, SignUpFormStyled } from "./styles";

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  role: "user" | "admin" | null;
  password: string;
  confirmPassword: string;
}

const initialUser: IUser = {
  email: "",
  firstName: "",
  lastName: "",
  role: null,
  password: "",
  confirmPassword: ""
};

const SignUp = () => {
  const [user, setUser] = useState<IUser>(initialUser);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState<Record<keyof IUser, boolean>>({
    email: false,
    firstName: false,
    lastName: false,
    role: false,
    password: false,
    confirmPassword: false
  });

  const handleChangeFirstName = (value: string) => {
    setUser((prevState) => ({ ...prevState, firstName: value }));
  };

  const handleChangeLastName = (value: string) => {
    setUser((prevState) => ({ ...prevState, lastName: value }));
  };

  const handleChangeEmail = (value: string) => {
    setUser((prevState) => ({ ...prevState, email: value }));
  };

  const handleChangePassword = (value: string) => {
    setUser((prevState) => ({ ...prevState, password: value }));
  };

  const handleChangeConfirmPassword = (value: string) => {
    setUser((prevState) => ({ ...prevState, confirmPassword: value }));
  };

  const handleChangeRole = (value: string | null) => {
    setUser((prevState) => ({ ...prevState, role: value as IUser["role"] }));
  };

  const handleCreateUser = () => {
    if (!Object.values(user).includes("")) {
      setLoading(true);
      setTimeout(() => {
        notifications.show({
          status: "success",
          title: "Account signup successful"
        });
        setLoading(false);
      }, 1000);
    } else {
      Object.entries(user).forEach(([key, value]) => {
        if (!value) {
          setBlur((prevState) => ({ ...prevState, [key]: true }));
        }
      });
    }
  };

  return (
    <SignUpPageStyled>
      <LogoContainer direction="column" justify="center" align="center" gap="m">
        <Flex align="center">
          <img src={Logo} alt="logo" width={150} />
          <Title size="2xl">QuenUI</Title>
        </Flex>
        <Title className="center-text" size="l">
          Welcome to QuenUI Templates
        </Title>
        <Text className="center-text">
          Utilizing QuenUI, React, TypeScript, Styled-components and Vite.
        </Text>
      </LogoContainer>
      <SignUpFormStyled
        direction="column"
        gap="m"
        justify="center"
        align="flex-start">
        <Title size="m">Create an account</Title>
        <Flex align="center">
          <Text size="s">Already have an account?</Text>
          <Button view="link" as={Link} to="/login">
            Sign in here
          </Button>
        </Flex>
        <Flex gap="m" className="field">
          <TextField
            className="field"
            label="First name"
            onChange={handleChangeFirstName}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, firstName: true }))
            }
            error={
              !user.firstName &&
              blur?.firstName &&
              "Please input your First name"
            }
          />
          <TextField
            className="field"
            label="Last name"
            onChange={handleChangeLastName}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, lastName: true }))
            }
            error={
              !user.lastName && blur?.lastName && "Please input your Last name"
            }
          />
        </Flex>
        <Flex gap="m" className="field">
          <TextField
            className="field"
            label="Email"
            onChange={handleChangeEmail}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, email: true }))
            }
            error={!user.email && blur?.email && "Please input your Email"}
          />
          <Select
            className="field"
            label="Role"
            items={[
              { label: "Admin", value: "admin" },
              { label: "User", value: "user" }
            ]}
            clearable
            onChange={handleChangeRole}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, role: true }))
            }
            error={!user.role && blur?.role && "Please choose your role"}
          />
        </Flex>
        <Flex gap="m" className="field">
          <TextField
            className="field"
            label="Password"
            error={
              !user.password && blur?.password && "Please input your password"
            }
            onChange={handleChangePassword}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, password: true }))
            }
          />
          <TextField
            className="field"
            label="Confirm password"
            error={
              !user.confirmPassword &&
              blur.confirmPassword &&
              "Please input your confirm password"
            }
            onChange={handleChangeConfirmPassword}
            onBlur={() =>
              setBlur((prevState) => ({ ...prevState, confirmPassword: true }))
            }
          />
        </Flex>
        <Button onClick={handleCreateUser} loading={loading}>
          Create
        </Button>
      </SignUpFormStyled>
    </SignUpPageStyled>
  );
};

export default SignUp;
