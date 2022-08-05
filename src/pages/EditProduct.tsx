import {
  Checkbox,
  Flex,
  HStack,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { CMSTemplate } from "../utils/CMSTemplate";
import * as yup from "yup";
import { Button } from "../components/Button";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../store/modules/products/types";
import { format, parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { editProductRequest } from "../store/modules/products/actions";
import { IState } from "../store";

const createProductSchema = yup.object().shape({
  name: yup.string().required("Nome do produto é obrigatório"),
  price: yup.number().positive().required("O preço é obrigatório"),
  manufacturing_date: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("A data de fabricação obrigatória"),

  perishable: yup.boolean(),
  due_date: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .when("perishable", {
      is: true,
      then: yup
        .date()
        .nullable()
        .transform((curr, orig) => (orig === "" ? null : curr))
        .min(
          yup.ref("manufacturing_date"),
          "A validade não pode ser antes da fabricação"
        )
        .required("A data de validade é obrigatória"),
    }),
});

export const EditProduct = () => {
  const { productId } = useParams();
  const editSuccess = useSelector<IState, boolean>(
    (state) => state.products.editSuccess
  );
  const [productData, setProductData] = useState<ProductData>();
  const [isPerishable, setIsPerishable] = useState(false);
  const dispatch = useDispatch();

  const formatData = (date: string) => {
    return format(parseISO(date), "yyyy-dd-mm");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  useEffect(() => {
    api.get(`/products/${productId}`).then((response) => {
      setProductData(response.data);
      setIsPerishable(response.data.perishable);
    });
  }, []);

  const handleCreateProduct: SubmitHandler<any> = (data) => {
    const formattedData = {
      ...data,
      id: productData?.id,
    };
    dispatch(editProductRequest(formattedData));
  };

  return (
    <CMSTemplate>
      <Flex flexDir="column" padding="20px" w="100%" h="100%">
        <Text fontWeight="bold" color="#F9F7F7" fontSize="2.5rem">
          Editar produto
        </Text>
        {!productData ? (
          <Spinner />
        ) : (
          <Flex
            mt="20px"
            justifyContent="flex-start"
            padding="10px 20px"
            paddingBottom="30px"
            alignItems="flex-start"
            borderRadius="20px"
            bg="#112D4E"
            w="fit-content"
            h="fit-content"
            flexDir="column"
            as="form"
            onSubmit={handleSubmit(handleCreateProduct)}
          >
            <HStack w="100%">
              <Input
                defaultValue={productData.name}
                label="Nome"
                {...register("name")}
                error={errors.name}
              />
              <Input
                defaultValue={productData.price}
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
                isChecked={isPerishable}
                onChange={() => setIsPerishable(!isPerishable)}
              />
            </Flex>
            <HStack w="100%" alignItems="center">
              <Input
                type="date"
                label="Data de fabricação"
                {...register("manufacturing_date")}
                error={errors.manufacturing_date}
                defaultValue={formatData(productData.manufacturing_date)}
              />
              <Input
                label="Validade"
                type="date"
                {...register("due_date")}
                error={errors.due_date}
                isDisabled={!isPerishable}
                defaultValue={productData.due_date}
              />
            </HStack>
            <Button type="submit">Concluir</Button>

            {editSuccess && <Text>Editado com sucesso!</Text>}
          </Flex>
        )}
      </Flex>
    </CMSTemplate>
  );
};
