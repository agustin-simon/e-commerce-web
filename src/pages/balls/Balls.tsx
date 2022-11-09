import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
  Text,
  Flex,
  Select,
  Stack,
  VStack,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import FilterSection from "../../components/filter-section/FilterSection";
import Pagination from "../../components/pagination/Pagination";
import ProductCard from "../../components/product-card/ProductCard";
import ProductsSection from "../../components/products-section/ProductsSection";

const Balls: React.FC = () => {
  const marginVariant = useBreakpointValue({
    base: "0",
    md: "2",
    lg: "0",
  });

  const paddingVariant = useBreakpointValue({
    base: "0",
    md: "0",
    lg: "6",
  });

  return (
    <Box boxShadow="md" m={marginVariant} p={["2", "2", "4", "6"]}>
      <Flex
        bg="white"
        flexDirection={["column", "column", "column", "row"]}
        mb="5"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt="4"
          w={["100%", "100%", "100%", "75%"]}
          p={paddingVariant}
        >
          <Breadcrumb
            fontSize="18px"
            p="4"
            w="100%"
            fontWeight={["", "", "", "bold"]}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" color="purple.600">
                Shoes
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text
            fontWeight="bold"
            fontSize="5xl"
            w="100%"
            color="purple.600"
            textAlign={["center", "center", "center", "left"]}
          >
            Shoes
          </Text>

          <ProductsSection />
        </Flex>

        <FilterSection />
      </Flex>
    </Box>
  );
};

export default Balls;
