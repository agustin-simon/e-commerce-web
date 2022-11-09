import {
  Text,
  Button,
  Flex,
  Select,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectProductsAmount,
} from "../../app/features/products/productsSlice";
import Product from "../../models/product.model";
import FullPageLoading from "../full-page-loading/FullPageLoading";
import ProductCard from "../product-card/ProductCard";

const ProductsSection: React.FC = () => {
  const productsApi = useSelector(selectAllProducts);

  const [products, setProducts] = useState<Product[]>(productsApi);
  const productsSize = useSelector(selectProductsAmount);

  const [items, setItems] = useState<Product[]>([]);
  const [amount, setAmount] = useState<number>(9);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullLoading, setFullLoading] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  const widthSection = useBreakpointValue({
    base: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
    "2xl": "90%",
  });

  const widthInput = useBreakpointValue({
    base: "90%",
    md: "45%",
    lg: "50%",
    xl: "30%",
    "2xl": "30%",
  });

  const showProducts = (amount: number) => {
    const itemsList = [];

    if (amount <= productsSize) {
      for (let i = 0; i < amount; i++) {
        itemsList.push(products[i]);
      }
    } else {
      for (let i = 0; i < productsSize; i++) {
        itemsList.push(products[i]);
      }
    }
    setItems(itemsList);
  };

  const handleAddItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAmount(amount + 9);
    }, 1000);
  };

  const orderItems = (ev: any) => {
    let listsItems: any[] = [];

    setFullLoading(true);
    setTimeout(() => {
      setFullLoading(false);

      switch (ev.target.value) {
        case "lowToHigh":
          listsItems = products
            .concat()
            .sort((a, b) => (a.price > b.price ? 1 : -1));
          setProducts(listsItems);
          break;
        case "highToLow":
          listsItems = products
            .concat()
            .sort((a, b) => (a.price < b.price ? 1 : -1));
          setProducts(listsItems);
          break;
      }
      setRender(!render);
    }, 1000);
  };

  useEffect(() => {
    showProducts(amount);
  }, [amount, render]);

  return (
    <>
      {fullLoading ? <FullPageLoading /> : ""}
      <Flex
        w="100%"
        direction={["column", "column", "column", "row"]}
        p={6}
        justifyContent="space-between"
        alignItems={["center", "center", "center", "flex-end"]}
      >
        <Text as="samp" fontSize="md" h="10">
          Showing {items.length} of {productsSize} results.
        </Text>

        <Select
          size="md"
          w={widthInput}
          borderRadius="none"
          onChange={(e) => orderItems(e)}
        >
          <option value="moreNew">Order by: More new</option>
          <option value="lowToHigh">Order by: Low to high</option>
          <option value="highToLow">Order by: High to low</option>
        </Select>
      </Flex>
      <Flex mt="10" w={widthSection} justifyContent="center" wrap="wrap">
        {items.map((product: any) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Flex>
      <Spinner
        mt="6"
        display={isLoading ? "" : "none"}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.600"
        size="xl"
      />
      <Button
        mt="10"
        onClick={() => handleAddItems()}
        display={isLoading ? "none" : ""}
        borderRadius="0px"
      >
        See More
      </Button>
    </>
  );
};

export default ProductsSection;
