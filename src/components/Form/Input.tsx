import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex,
  Icon,
  Tooltip,
  InputRightElement,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError | any;
  tip?: string;
  labelColor?: string;
  icon?: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, icon, label, labelColor, tip, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <Flex justifyContent="flex-start">
        {!!label && (
          <FormLabel color={labelColor} htmlFor={name}>
            {label}
          </FormLabel>
        )}
      </Flex>
      <InputGroup>
        {icon && <InputLeftElement pointerEvents="none" children={icon} />}
        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="#3F72AF"
          borderColor="gray.300"
          bgColor="gray.200"
          color="black"
          size="lg"
          ref={ref}
          {...rest}
        />

        {!!error && (
          <Tooltip
            placement="top"
            bgColor="red.500"
            color="white"
            label={error.message}
            aria-label="A tooltip"
          >
            <InputRightElement
              h="100%"
              children={<Icon color="red.500" size={10} as={BiErrorCircle} />}
            />
          </Tooltip>
        )}

        {tip && (
          <>
            {!!!error && (
              <Tooltip
                placement="top"
                bgColor="blue.500"
                color="white"
                label={tip}
                aria-label="A tooltip"
              >
                <InputRightElement
                  h="100%"
                  children={
                    <Icon
                      color="blue.500"
                      size={10}
                      as={AiFillQuestionCircle}
                    />
                  }
                />
              </Tooltip>
            )}
          </>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
