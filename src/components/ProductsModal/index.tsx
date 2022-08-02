import {
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
  Text,
} from "@chakra-ui/react";
import { Button } from "../Button";
import { Input } from "../Form/Input";

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsModal = ({ isOpen, onClose }: ProductsModalProps) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#112D4E">
        <ModalHeader color="white">Cadastrar produto </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody display="flex" flexDir="column" gap="10px 0px">
          <HStack>
            <Input label="Nome" name="title" />
            <Input label="Preço (R$)" name="price" />
          </HStack>
          <Flex m="15px 0px" gap="0px 20px">
            <Text color="white" fontSize="1rem" fontWeight="medium">
              O produto é perecível?
            </Text>
            <Checkbox size="lg" colorScheme="green" />
          </Flex>
          <HStack w="100%" alignItems="center">
            <Input
              type="date"
              label="Data de fabricação"
              name="manufacturing_date"
            />
            <Input label="Validade" name="due_date" />
          </HStack>
        </ModalBody>

        <ModalFooter alignItems="center">
          <Button>Cadastar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
