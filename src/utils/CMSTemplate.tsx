import { Flex, Icon, Text } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { MdHome, MdLogout, MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CMSItem } from "../components/CMS/Item";
import { Header } from "../components/Header";
import { IState } from "../store";

interface ICMSTemplate {
  children: ReactNode;
}

export function CMSTemplate({ children }: ICMSTemplate) {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh" bg="#3F72AF" justifyContent="space-between">
      <Flex
        padding="5px 10px"
        w="15%"
        borderRadius="0px 20px 20px 0px"
        bg="#112D4E"
        flexDir="column"
      >
        <Header />
        <Flex w="100%" h="100%" flexDir="column" gap="20px 0px" mt="40px">
          <CMSItem
            onClick={() => navigate("/home", { replace: true })}
            title="Home"
            icon={MdHome}
          />
          <CMSItem
            onClick={() => navigate("products")}
            title="Produtos"
            icon={MdShoppingCart}
          />
          <CMSItem _hover={{ color: "#F05454" }} title="Sair" icon={MdLogout} />
        </Flex>
      </Flex>
      <Flex w="84%">{children}</Flex>
    </Flex>
  );
}
