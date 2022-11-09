import React from "react";
import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";
import ShopCart from "./drawers/shop-cart/ShopCart";
import { RootState } from "../../app/store";

const CartSection: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnShopRef = React.useRef<any>();

  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <Flex position="relative">
      <Flex
        position="absolute"
        bg="white"
        color="purple.600"
        fontSize="13px"
        left="18px"
        top="-9px"
        fontWeight="bold"
        w={4}
        h={4}
        borderRadius="100%"
        justifyContent="center"
        alignItems="center"
      >
        {cartTotalQuantity}
      </Flex>
      <Icon
        as={TbShoppingCart}
        w={7}
        h={7}
        color="purple.600"
        ref={btnShopRef}
        onClick={onOpen}
      />
      <ShopCart isOpen={isOpen} onClose={onClose} inputRef={btnShopRef} />
    </Flex>
  );
};

export default CartSection;
