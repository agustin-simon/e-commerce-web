import {
  Box,
  Flex,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../../app/features/cart/cartSlices";
import Product from "../../../../models/product.model";

interface Props {
  product: Product;
}

const CartItemDrawer: React.FC<Props> = ({ product }) => {
  const limitProducts = 4;
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch();

  const handleAddItem = (product: Product) => {
    if (amount < limitProducts) {
      dispatch(addToCart(product));
      setAmount(amount + 1);
    }
  };

  const handleRemoveItem = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product: Product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <Flex flexDirection="column">
      <Flex bg="gray.300" w="100%" justifyContent="space-between" p="1">
        <Text fontSize="13px" ml="2">
          {product.name}#{product.id}
        </Text>
        <Box
          as="button"
          display="flex"
          justifyContent="center"
          onClick={() => handleRemoveItem(product)}
        >
          <Icon as={MdClose} w={5} h={5} color="#6B46C1" />
        </Box>
      </Flex>
      <Flex mb="5" mt="5">
        <Image w="33%" src={product.image} />
        <Flex w="100%">
          <Flex w="100%" justifyContent="space-around" alignItems="center">
            <Flex w="30%" alignItems="center">
              <Text as="samp" color="purple.600" fontSize="16px" noOfLines={1}>
                ${product.price}
              </Text>
            </Flex>
            <NumberInput
              defaultValue={product.cartQuantity}
              min={0}
              max={4}
              w="50px"
              h="40px"
            >
              <NumberInputField
                w="60px"
                h="35px"
                display="flex"
                justifyContent="flex-start"
              />
              <NumberInputStepper w="20px" h="35px" left="37px">
                <NumberIncrementStepper
                  color="#6B46C1"
                  onClick={() => handleAddItem(product)}
                  w="20px"
                  h="10px"
                />
                <NumberDecrementStepper
                  color="#6B46C1"
                  onClick={() => handleDecreaseCart(product)}
                  w="20px"
                  h="10px"
                />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItemDrawer;
