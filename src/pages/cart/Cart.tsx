import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  selectAllCartItems,
  getTotals,
} from "../../app/features/cart/cartSlices";
import { RootState } from "../../app/store";
import Product from "../../models/product.model";
import CartItem from "./components/cart-items/CartItem";
import PriceTable from "./components/price-table/PriceTable";

const Cart: React.FC = () => {
  const marginVariant = useBreakpointValue({
    base: "2",
    md: "8",
    lg: "8",
    xl: "50px 100px 55px 100px",
  });
  const widthPrice = useBreakpointValue({
    base: "100%",
    md: "80%",
    lg: "80%",
    xl: "65%",
  });
  const widthDivider = useBreakpointValue({
    base: "100%",
    md: "80%",
    lg: "80%",
    xl: "60%",
  });
  const widthTableBar = useBreakpointValue({
    base: "70%",
    md: "70%",
    lg: "70%",
    xl: "65%",
  });

  const items = useSelector(selectAllCartItems);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Box bg="white" boxShadow="md" m={marginVariant}>
      <Flex flexDirection="column" alignItems="center" p="6">
        <Text as="b" fontSize="3xl">
          Cart
        </Text>
        <Divider w={widthDivider} mt="4" mb="4" />
        <Flex
          w={widthTableBar}
          bg="gray.300"
          m="2"
          p="2"
          boxShadow="sm"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Text as="b" fontSize="14px" textAlign="center" w="55%">
            Product
          </Text>
          <Text as="b" fontSize="14px" textAlign="center" w="20%">
            Price
          </Text>
          <Text as="b" fontSize="14px" textAlign="center" w="20%">
            Quantity
          </Text>
          <Text as="b" fontSize="14px" textAlign="center" w="20%">
            Subtotal
          </Text>
        </Flex>
        {items.length === 0 ? (
          <Text color="gray.500" fontSize="17px" p="4">
            There are no products in the cart.
          </Text>
        ) : (
          ""
        )}
        <Flex w="100%" flexDirection="column" alignItems="center">
          {items.map((item: Product) => {
            return <CartItem key={item.id} product={item} isDrawer={false} />;
          })}
        </Flex>
        <Divider w={widthDivider} mt="4" />
        <Flex
          w={widthPrice}
          flexDirection="column"
          mt="4"
          mb="10"
          boxShadow="md"
        >
          <Flex bg="gray.300">
            <Text as="b" fontSize="lg" p="3">
              Final Price
            </Text>
          </Flex>
          <Flex flexDirection="column" justifyContent="space-between" p="1">
            <PriceTable cart={cart} />
            <Button
              borderRadius="none"
              bg="purple.600"
              color="white"
              _hover={{ backgroundColor: "purple.600" }}
              minW="100px"
              mt="4"
            >
              Go to Buy
            </Button>
          </Flex>
        </Flex>
        <Link to={"/balls"}>
          <Button
            borderRadius="none"
            bg="purple.600"
            color="white"
            _hover={{ backgroundColor: "purple.600" }}
            minW="100px"
            mt="4"
            boxShadow="md"
          >
            See more products
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Cart;
