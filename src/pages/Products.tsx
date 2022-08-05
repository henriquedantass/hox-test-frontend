import {
  Button as ChakraButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsModal } from "../components/ProductsModal";
import { ProductsTable } from "../components/ProductsTable";
import { IState } from "../store";
import {
  deleteProductRequest,
  getProductsRequest,
} from "../store/modules/products/actions";
import { ProductData } from "../store/modules/products/types";
import { CMSTemplate } from "../utils/CMSTemplate";

export const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formInitialValue, setFormInitialValue] = useState<
    ProductData | undefined
  >();

  const products = useSelector<IState, ProductData[]>(
    (state) => state.products.data
  );
  const dispatch = useDispatch();

  const handleDeleteProduct = useCallback((productId: number) => {
    dispatch(deleteProductRequest(productId));
  }, []);

  const handleEditProduct = useCallback((product: ProductData) => {
    setFormInitialValue(product);
    onOpen();
  }, []);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  return (
    <CMSTemplate>
      <Flex flexDir="column" padding="20px" w="100%" h="100%">
        <Text fontWeight="bold" color="#F9F7F7" fontSize="2.5rem">
          Produtos
        </Text>
        <Flex mt="50px" w="100%">
          <ChakraButton onClick={onOpen}>Adicionar produto</ChakraButton>
        </Flex>
        <ProductsTable
          onEdit={(product) => handleEditProduct(product)}
          onDelete={(productId) => handleDeleteProduct(productId)}
          data={products}
        />
        <ProductsModal
          isOpen={isOpen}
          onClose={onClose}
          initialValue={formInitialValue}
        />
      </Flex>
    </CMSTemplate>
  );
};
