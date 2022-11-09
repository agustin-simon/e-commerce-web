import {
  Box,
  Flex,
  Image,
  Stack,
  useBreakpointValue,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../app/features/cart/cartSlices";
import { selectAllProducts } from "../../app/features/products/productsSlice";
import Product from "../../models/product.model";
import SizesList from "./components/size-list/SizesList";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<number>(0);
  const productsApi = useSelector(selectAllProducts);

  const toast = useToast();
  const dispatch = useDispatch();

  const marginVariant = useBreakpointValue({
    base: "2",
    md: "2",
    lg: "10",
  });
  const mainImageWidth = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "60%",
  });
  const secondaryImageWidth = useBreakpointValue({
    base: "20%",
    md: "20%",
    lg: "20%",
  });
  const buttonWidth = useBreakpointValue({
    base: "50%",
    md: "50%",
    lg: "25%",
  });

  const getProductById = (productsList: Product[], id: any) => {
    const idd = parseInt(id);
    const productFind = productsList.find((product) => product.id === idd);
    if (productFind !== null) {
      setProduct(productFind);
    }
  };

  const handleSelectSize = (e: any) => {
    setSize(e.target.value);
  };

  const handleSelectQuantity = (e: any) => {
    setQuantity(e);
    console.log("quantity:" + e);
  };

  const handleAddToCart = (
    product: Product,
    size: number,
    quantity: number
  ) => {
    toast({
      title: `${product.name} was added to cart.`,
      status: "success",
      isClosable: true,
    });
    for (let i = 0; i < quantity; i++) {
      let tempId = product.id + "" + size;
      let id = parseInt(tempId);
      const cartProduct: Product = { ...product, id: id, finalSize: size };
      dispatch(addToCart(cartProduct));
    }
  };

  useEffect(() => {
    getProductById(productsApi, id);
  }, [id]);

  return (
    <>
      <Box bg="white" boxShadow="md" m={marginVariant}>
        <Flex flexDirection={["column", "column", "row"]}>
          <Flex
            w={["100%", "100%", "50%"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="4"
          >
            <Image
              src={product?.image}
              alt="Dan Abramov"
              w={mainImageWidth}
              border="1px solid black"
              position="relative"
              outline="1px solid #6b46c1"
              outlineOffset="-4px"
            />
            <Stack spacing={5} direction="row" justifyContent="center" mt="2">
              <Image
                src={product?.image}
                alt="Dan Abramov"
                w={secondaryImageWidth}
                border="1px solid black"
                outline="1px solid #6b46c1"
                outlineOffset="-4px"
              />
              <Image
                src={product?.image}
                alt="Dan Abramov"
                w={secondaryImageWidth}
                border="1px solid black"
                outline="1px solid #6b46c1"
                outlineOffset="-4px"
              />
            </Stack>
          </Flex>
          <Flex
            w={["100%", "100%", "50%"]}
            flexDirection="column"
            justifyContent="center"
            alignItems="space-around"
            p={["6", "4", "4", "40px"]}
          >
            <Heading
              fontSize="4xl"
              color="black"
              noOfLines={1}
              textAlign={["center", "center", "left", "left"]}
            >
              {product?.name}
            </Heading>
            <Text
              as="b"
              fontSize="5xl"
              color="#6b46c1"
              textAlign={["center", "center", "left", "left"]}
              mt={["", "", "10"]}
            >
              ${product?.price}
            </Text>

            <Text fontSize={["xl", "xl", "xl", "lg"]} mt={["10", "", "10"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              odio turpis. Nam enim velit, vehicula nec convallis quis,
              elementum at dolor. Quisque vestibulum.
            </Text>

            <Text fontSize={["xl", "xl", "xl", "lg"]} mt={["10", "", "10"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              odio turpis. Nam enim velit, vehicula nec convallis quis,
              elementum at dolor. Quisque vestibulum.
            </Text>

            <UnorderedList mt={["6", "6", "10"]} fontSize={["", "", "", "xl"]}>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>

            <Text
              as="b"
              mb={2}
              fontSize={["", "", "", "xl"]}
              mt={["10", "", "10"]}
            >
              Sizes:
            </Text>

            <SizesList
              activeProduct={product}
              handleSelectSize={handleSelectSize}
            />
            {/* <Flex wrap='wrap'>
                            {product?.sizes.map((item, index) => {
                                return (
                                    <SizeBox key={index} num={item} handleSelectSize={handleSelectSize}/>
                                )
                            })}
                        </Flex> */}

            <Text as="u" fontSize={["", "", "", "xl"]} mt={["10", "", "10"]}>
              Show sizes table
            </Text>

            <Flex mt="10">
              <NumberInput
                defaultValue="1"
                min={1}
                max={3}
                w={["25%", "25%", "25%", "16%"]}
                mr="2"
                borderRadius="0px"
                onChange={(e) => handleSelectQuantity(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                borderRadius="none"
                bg="purple.600"
                color="white"
                _hover={{ backgroundColor: "purple.600" }}
                ml="2"
                minW="110px"
                w={buttonWidth}
                onClick={() =>
                  product !== undefined
                    ? handleAddToCart(product, size, quantity)
                    : ""
                }
              >
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Text fontSize="3xl" fontWeight="bold" mt="4" textAlign="center">
        Related Products
      </Text>

      <Stack
        w="100%"
        mb="6"
        mt="6"
        spacing={12}
        direction={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        {/* <ProductCard/>
                <ProductCard/>
                <ProductCard/> */}
      </Stack>
    </>
  );
};

export default ProductDetails;
