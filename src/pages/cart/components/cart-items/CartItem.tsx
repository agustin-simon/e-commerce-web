import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../../app/features/cart/cartSlices";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import Product from "../../../../models/product.model";
import Alert from "../alert/Alert";

//Interface Props
interface ItemProps {
  isDrawer: Boolean;
  product: Product;
}

const CartItem: React.FC<ItemProps> = (props: ItemProps) => {
  const limitProducts = 4;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDrawer, product } = props;
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
    onClose();
  };

  const handleDecreaseCart = (product: Product) => {
    dispatch(decreaseCart(product));
    setAmount(amount - 1);
  };

  const widthItem = useBreakpointValue({
    base: "100%",
    md: "80%",
    lg: "70%",
    xl: "65%",
  });
  const heightImage = useBreakpointValue({
    base: "70%",
    md: "60%",
    lg: "100%",
    xl: "55%",
    "2xl": "45%",
  });
  const widthInput = useBreakpointValue({
    base: "32%",
    md: "20%",
    lg: "85%",
    xl: "75%",
    "2xl": "45%",
  });

  return (
    <>
      <Alert
        handleRemoveItem={handleRemoveItem}
        isOpen={isOpen}
        onClose={onClose}
        item={product}
      />
      <Flex
        w={isDrawer ? "100%" : widthItem}
        bg="white"
        flexDirection="column"
        boxShadow="md"
      >
        <Flex bg="gray.300" w="100%" justifyContent="flex-end" p="1">
          <Box
            as="button"
            display="flex"
            justifyContent="center"
            onClick={onOpen}
          >
            <Icon as={MdClose} w={5} h={5} color="#6B46C1" />
          </Box>
        </Flex>

        <Flex
          bg="white"
          flexDirection="column"
          alignItems="center"
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <Flex w="60%" flexDirection="column" alignItems="center" p="4">
            <Image w={isDrawer ? "100%" : heightImage} src={product.image} />
          </Flex>

          <Flex justifyContent="space-between" w="100%" p="4">
            <Text
              as="b"
              fontSize="14px"
              noOfLines={1}
              display={isDrawer ? "none" : "unset"}
            >
              Product:
            </Text>
            <Text fontSize="14px" noOfLines={1}>
              {product.name}
            </Text>
          </Flex>

          <Flex justifyContent="space-between" w="100%" p="4">
            <Text as="b" fontSize="14px" noOfLines={1}>
              Price:
            </Text>
            <Text fontSize="14px" noOfLines={1}>
              {product.price}
            </Text>
          </Flex>

          <Flex
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            p="4"
          >
            <Text as="b" fontSize="14px" noOfLines={1}>
              Quantity:
            </Text>
            <NumberInput
              defaultValue={product.cartQuantity}
              min={0}
              max={4}
              w="30%"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper
                  color="#6B46C1"
                  onClick={() => handleAddItem(product)}
                />
                <NumberDecrementStepper
                  color="#6B46C1"
                  onClick={() => handleDecreaseCart(product)}
                />
              </NumberInputStepper>
            </NumberInput>
          </Flex>

          <Flex
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            p="4"
          >
            <Text as="b" fontSize="14px" noOfLines={1}>
              Subtotal:
            </Text>
            <Text fontSize="14px" noOfLines={1}>
              ${product.cartQuantity * product.price}
            </Text>
          </Flex>
        </Flex>

        <Flex bg="white" display={["none", "none", "none", "flex", "flex"]}>
          <Flex w="80%">
            <Flex w="25%" flexDirection="column" p="4">
              <Image w={isDrawer ? "100%" : heightImage} src={product.image} />
            </Flex>

            <Flex justifyContent="center" alignItems="center" w="35%" p="4">
              <Text
                as="b"
                color="purple.600"
                fontSize="15px"
                textAlign="center"
              >
                {product.name}#{product.id}
              </Text>
            </Flex>

            <Flex justifyContent="center" alignItems="center" w="20%" p="4">
              <Text as="samp" fontSize="17px" noOfLines={1}>
                ${product.price}
              </Text>
            </Flex>

            <Flex
              justifyContent="space-between"
              w="20%"
              alignItems="center"
              p="4"
            >
              <NumberInput
                defaultValue={product.cartQuantity}
                min={0}
                max={4}
                w={widthInput}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    color="#6B46C1"
                    onClick={() => handleAddItem(product)}
                  />
                  <NumberDecrementStepper
                    color="#6B46C1"
                    onClick={() => handleDecreaseCart(product)}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>

          <Flex justifyContent="center" w="20%" alignItems="center" p="4">
            <Text as="samp" fontSize="17px" noOfLines={1}>
              ${product.cartQuantity * product.price}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CartItem;
