import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CMSTemplate } from "../utils/CMSTemplate";

export const Products = () => {
  const store = useSelector((state) => state);

  return (
    <CMSTemplate>
      <Text color="red">Pagina de produtos</Text>
    </CMSTemplate>
  );
};
