import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButton extends ButtonProps {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: IButton) => {
  return (
    <ChakraButton
      transition="all 0.5s ease"
      _hover={{
        color: "#3F72AF",
        background: "#F9F7F7",
        border: "1px solid #3F72AF",
      }}
      border="1px solid transparent"
      mt="40px"
      bg="#3F72AF"
      color="#F9F7F7"
      padding="20px"
      w="30%"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};
