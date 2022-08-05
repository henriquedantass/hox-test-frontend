import { Flex, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Input } from "../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdLock, MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../store/modules/user/actions";
import { IState } from "../store";
import * as yup from "yup";
import { UserProps } from "../store/modules/user/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export function LoginPage() {
  const userStatus = useSelector<IState, UserProps>((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<any> = (data) => {
    dispatch(signInRequest(data));
  };

  useEffect(() => {
    if (userStatus.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="App">
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Flex
          padding="20px"
          borderRadius="10px"
          flexDir="column"
          w="35%"
          h="50%"
          bg="#DBE2EF"
          alignItems="center"
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
        >
          <Text
            fontWeight="bold"
            fontSize="1.3rem"
            textAlign="center"
            mb="20px"
          >
            Faça login
          </Text>
          <Stack w="100%" spacing="20px">
            <Input
              labelColor="#000"
              icon={<MdPerson />}
              label="E-mail"
              placeholder="digite seu e-mail aqui"
              {...register("email")}
              error={errors.email}
            />
            <Input
              labelColor="#000"
              icon={<MdLock />}
              label="Senha"
              placeholder="digite sua senha aqui"
              type="password"
              {...register("password")}
              error={errors.password}
            />
          </Stack>
          <Button isLoading={isSubmitting} type="submit">
            Entrar
          </Button>
          {userStatus.logginFailed && (
            <Text mt="50px" fontWeight="bold" color="#F05454">
              Credenciais inválidas
            </Text>
          )}
        </Flex>
      </Flex>
    </div>
  );
}
