import { Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ICMSItem extends FlexProps {
  title: string;
  icon: IconType;
  isSelected?: boolean;
}

export const CMSItem = ({ icon, title, isSelected, ...rest }: ICMSItem) => {
  return (
    <Flex
      fontSize="1.2rem"
      color={isSelected ? "#E8AA42" : "#F9F7F7"}
      alignItems="center"
      gap="0px 10px"
      cursor="pointer"
      _hover={{ color: "#E8AA42" }}
      {...rest}
    >
      <Icon as={icon} />
      <Text>{title}</Text>
    </Flex>
  );
};
