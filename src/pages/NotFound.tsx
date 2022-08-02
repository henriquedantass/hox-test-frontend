import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiBlock } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Flex
        w="40%"
        h="40%"
        flexDir="column"
        bg="#DBE2EF"
        gap="20px 0px"
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Icon fontSize="3rem" as={BiBlock} />
        <Text fontSize="2rem" fontWeight="bold">
          Página não encontrada
        </Text>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Flex>
    </Flex>
  );
};
