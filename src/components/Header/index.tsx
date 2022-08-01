import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { UserProps } from "../../store/modules/user/types";

export const Header = () => {
  const user = useSelector<IState, UserProps>((state) => state.user);

  return (
    <Flex mt="30px" flexDir="column" color="#F9F7F7">
      <Text fontSize="1.4rem">Bem-vindo,</Text>
      <Text color="#E8AA42" fontWeight="bold" fontSize="1.2rem">
        {user.data.username}
      </Text>
    </Flex>
  );
};
