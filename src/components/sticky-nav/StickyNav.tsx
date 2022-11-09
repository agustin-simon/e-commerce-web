import {
  Flex,
  Icon,
  Spacer,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoMdBasketball } from "react-icons/io";
import { TbAlignJustified } from "react-icons/tb";
import CartSection from "../cart-section/CartSection";
import DrawerElement from "./drawers/drawer-element/DrawerElement";
import { stickyNavContainer } from "./StickyNav.styles";

const StickyNav: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  const displayMenuButton = useBreakpointValue({
    base: "flex",
    md: "flex",
    lg: "none",
  });

  return (
    <Flex __css={stickyNavContainer}>
      <Icon
        as={TbAlignJustified}
        w={8}
        h={8}
        color="purple.600"
        ref={btnRef}
        onClick={onOpen}
        display={displayMenuButton}
      />
      <DrawerElement isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Spacer />
      <Icon as={IoMdBasketball} w={9} h={9} />
      <Spacer />
      <CartSection />
    </Flex>
  );
};

export default StickyNav;
