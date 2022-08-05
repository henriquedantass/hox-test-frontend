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
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Form/Input";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createProductRequest } from "../../store/modules/products/actions";

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsModal = ({ isOpen, onClose }: ProductsModalProps) => {
  const dispatch = useDispatch();

  const createProductSchema = yup.object().shape({
    name: yup.string().required("Nome do produto é obrigatório"),
    price: yup.number().positive().required("O preço é obrigatório"),
    manufacturing_date: yup
      .string()
      .required("A data de fabricação obrigatória"),
    perishable: yup.boolean(),
    due_date: yup.string().when("perishable", {
      is: true,
      then: yup
        .string()
        .min(
          yup.ref("manufacturing_date"),
          "A validade não pode ser antes da fabricação"
        )
        .required("A data de validade é obrigatória"),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  const handleCreateProduct: SubmitHandler<any> = (data) => {
    dispatch(createProductRequest(data));
    reset();
    onClose();
  };

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        onSubmit={handleSubmit(handleCreateProduct)}
        as="form"
        bg="#112D4E"
      >
        <ModalHeader color="white">Cadastrar produto </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody display="flex" flexDir="column" gap="10px 0px">
          <HStack>
            <Input label="Nome" {...register("name")} error={errors.name} />
            <Input
              label="Preço (R$)"
              {...register("price")}
              error={errors.price}
            />
          </HStack>
          <Flex m="15px 0px" gap="0px 20px">
            <Text color="white" fontSize="1rem" fontWeight="medium">
              O produto é perecível?
            </Text>
            <Checkbox
              size="lg"
              colorScheme="green"
              {...register("perishable")}
            />
          </Flex>
          <HStack w="100%" alignItems="center">
            <Input
              type="date"
              label="Data de fabricação"
              {...register("manufacturing_date")}
              error={errors.manufacturing_date}
            />
            <Input
              label="Validade"
              type="date"
              {...register("due_date")}
              error={errors.due_date}
            />
          </HStack>
        </ModalBody>
        <ModalFooter alignItems="center">
          <Button type="submit">Cadastar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
