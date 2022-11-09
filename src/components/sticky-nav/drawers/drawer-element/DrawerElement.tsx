import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { IoMdBasketball } from "react-icons/io";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { IoIosExit } from "react-icons/io";

import React from "react";
import { Link } from "react-router-dom";

interface DrawerElement {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}

const DrawerElement: React.FC<DrawerElement> = (props: DrawerElement) => {
  const { isOpen, onClose, btnRef } = props;

  const listItems = [
    {
      name: "Home",
      url: "/home",
      icon: FaHome,
    },
    {
      name: "Products",
      url: "/balls",
      icon: GiConverseShoe,
    },
    {
      name: "About us",
      url: "/about-us",
      icon: ImUsers,
    },
    {
      name: "My Account",
      url: "/profile-login",
      icon: FaUserAlt,
    },
    {
      name: "Exit",
      url: "",
      icon: IoIosExit,
    },
  ];

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="purple.600">
        <DrawerCloseButton />
        <DrawerHeader display="flex" alignItems="center">
          <Icon as={IoMdBasketball} w={12} h={12} mr="4" />
          Logo
        </DrawerHeader>

        <DrawerBody>
          <UnorderedList color="white" listStyleType="none" fontSize="lg">
            {listItems &&
              listItems.map((item, index) => {
                return (
                  <Link key={index} to={item.url} onClick={onClose}>
                    <Flex h="60px" alignItems="center">
                      <Icon as={item.icon} mr="2" w={6} h={6} />
                      <ListItem as="abbr" key={index}>
                        {item.name}
                      </ListItem>
                    </Flex>
                  </Link>
                );
              })}
          </UnorderedList>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerElement;
