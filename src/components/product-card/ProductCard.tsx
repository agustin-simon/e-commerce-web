import {
  Flex,
  Image,
  Text,
  Button,
  useBreakpointValue,
  Skeleton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Product from "../../models/product.model";
import { useState } from "react";
import { prodCardContStyles } from "./ProductCard.styles";

/**
  Este componente renderiza una card del producto con id, image, name, category, price.
*/

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const { product } = props;

  const navigate = useNavigate();

  const [loaded, setLoaded] = useState<boolean>(false);

  const widthProductCard = useBreakpointValue({
    base: "48%",
    md: "55%",
    lg: "26%",
    xl: "75%",
  });
  const marginProductCard = useBreakpointValue({
    base: "2px",
    md: "8px",
    lg: "8px",
    xl: "8px",
    "2xl": "8px",
  });

  const handleAddToCart = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Flex
      w={widthProductCard}
      margin={marginProductCard}
      __css={prodCardContStyles}
    >
      <Skeleton
        isLoaded={loaded}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={product.image}
          alt="Product"
          w={["90", "65%"]}
          onLoad={() => setLoaded(true)}
        />
      </Skeleton>
      <Text fontSize="md" color="gray.400">
        {product.category}
      </Text>
      <Text as="b" fontSize="xl" noOfLines={1}>
        {product.name}
      </Text>
      <Text fontSize="lg">$ {product.price}</Text>
      <Button
        borderRadius="none"
        bg="purple.600"
        color="white"
        _hover={{ backgroundColor: "purple.600" }}
        minW="100px"
        onClick={() => handleAddToCart(product)}
      >
        Buy
      </Button>
    </Flex>
  );
};

export default ProductCard;
