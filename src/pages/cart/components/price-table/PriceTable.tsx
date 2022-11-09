import {
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Input,
  FormLabel,
  Flex,
  Box,
  Button,
  Tfoot,
} from "@chakra-ui/react";
import { useState } from "react";
import { iniState } from "../../../../app/features/cart/cartSlices";

interface Props {
  cart: iniState;
}

const PriceTable: React.FC<Props> = (props: Props) => {
  const { cart } = props;
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <>
      <TableContainer w="100%">
        <Table>
          <Tbody>
            <Tr>
              <Td w="40%">
                <Text as="b">Subtotal</Text>
              </Td>
              <Td w="60%">
                <Text as="samp">${cart.cartTotalAmount}</Text>
              </Td>
            </Tr>
            <Tr className={showForm ? "showOff" : "showOn"}>
              <Td w="25%">
                <Text as="b">Shipping</Text>
              </Td>
              <Td display="flex" flexDirection="column" p="4">
                <Flex
                  flexDirection="column"
                  display={showForm ? "flex" : "none"}
                >
                  <FormLabel p="2">Country</FormLabel>
                  <Input placeholder="Country" size="md" borderRadius="0px" />
                  <FormLabel p="2">Province</FormLabel>
                  <Input placeholder="Province" size="md" borderRadius="0px" />
                  <FormLabel p="2">City</FormLabel>
                  <Input placeholder="City" size="md" borderRadius="0px" />
                </Flex>
                <Box p="3">
                  <Text as="b" onClick={() => setShowForm(!showForm)}>
                    Calculate shipping
                  </Text>
                </Box>
              </Td>
            </Tr>
            <Tr>
              <Td w="25%">
                <Text as="b">Total</Text>
              </Td>
              <Td w="75%">
                <Text as="samp">${cart.cartTotalAmount}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PriceTable;
