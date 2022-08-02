import {
  Button as ChakraButton,
  Checkbox,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { Input } from "../components/Form/Input";
import { ProductsModal } from "../components/ProductsModal";
import { ProductsTable } from "../components/ProductsTable";
import { IState } from "../store";
import { getProductsRequest } from "../store/modules/products/actions";
import { ProductData } from "../store/modules/products/types";
import { CMSTemplate } from "../utils/CMSTemplate";

export const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useSelector<IState, ProductData[]>(
    (state) => state.products.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  return (
    <CMSTemplate>
      <Flex flexDir="column" padding="20px" w="100%" h="100%">
        <Text fontWeight="bold" color="#F9F7F7" fontSize="2.5rem">
          Produtos
        </Text>
        <Flex onClick={onOpen} mt="50px" w="100%">
          <ChakraButton>Adicionar produto</ChakraButton>
        </Flex>
        <ProductsTable data={products} />
        <ProductsModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </CMSTemplate>
  );
};
