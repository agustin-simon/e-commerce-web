import {
  Flex,
  Button,
  Image,
  Text,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import backgroundTwo from "../../../../assets/images/background2.png";
import {
  mainBanBoxStyles,
  mainBanBtnStyles,
  mainBanContStyles,
} from "./MainBanner.styles";

/**
  Este componente carga una imagen(banner), con una descripción y un boton para acceder a los productos de la web.
 */

const MainBanner: React.FC = () => {
  const display = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "flex",
  });

  return (
    <Flex display={display} __css={mainBanContStyles}>
      <Flex __css={mainBanBoxStyles}>
        <Text as="b" w="80%" color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button __css={mainBanBtnStyles}>
          <Icon as={GiShoppingCart} />
          Buy
        </Button>
      </Flex>
      <Image src={backgroundTwo} w="100%" />
    </Flex>
  );
};

export default MainBanner;
