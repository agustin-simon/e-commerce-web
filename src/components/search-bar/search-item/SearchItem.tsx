import { Flex, Image, Text } from "@chakra-ui/react";
import Product from "../../../models/product.model";

interface Props {
  product: Product;
}

const SearchItem: React.FC<Props> = ({ product }) => {
  return (
    <Flex p="1" alignItems="center">
      <Image src={product.image} w="55px" />
      <Text as="b" fontSize="15px" ml="4">
        {product.name}
      </Text>
    </Flex>
  );
};

export default SearchItem;
