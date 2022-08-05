import {
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { ProductData } from "../../store/modules/products/types";
import { formatPrice } from "../../utils/Formats";
import { format } from "date-fns";

interface IProductsTable {
  data: ProductData[];
  onDelete: (productId: number) => void;
  onEdit: (productId: number) => void;
}

export const ProductsTable = ({ data, onDelete, onEdit }: IProductsTable) => {
  return (
    <TableContainer
      mt="20px"
      borderRadius="10px"
      minHeight="150px"
      bg="#112D4E"
      color="#F9F7F7"
      fontSize="1.1rem"
    >
      <Table>
        <Thead>
          <Tr>
            <Th color="#F9F7F7">Nome</Th>
            <Th color="#F9F7F7">Data de fabricação</Th>
            <Th color="#F9F7F7">Data de validade</Th>
            <Th color="#F9F7F7">Perecivel</Th>
            <Th color="#F9F7F7">Preço</Th>
            <Th color="#F9F7F7" />
          </Tr>
        </Thead>
        <Tbody>
          {data.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>
                {format(new Date(product.manufacturing_date), "yyyy-dd-mm")}
              </Td>
              <Td>
                {product.due_date
                  ? format(new Date(product.due_date), "yyyy-dd-mm")
                  : "sem validade"}
              </Td>
              <Td>{product.perishable ? "Sim" : "Não"}</Td>
              <Td>{formatPrice(product.price)}</Td>
              <Td>
                <Icon
                  cursor="pointer"
                  _hover={{ opacity: 0.5 }}
                  m="0px 20px"
                  as={BiTrash}
                  onClick={() => onDelete(product.id)}
                />
                <Icon
                  onClick={() => onEdit(product.id)}
                  cursor="pointer"
                  _hover={{ opacity: 0.5 }}
                  as={MdEdit}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
