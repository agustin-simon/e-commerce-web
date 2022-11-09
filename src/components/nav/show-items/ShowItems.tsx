import {
  Flex,
  Text,
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import listItems from "../items/nav.items";

// styles
import {
  showIContainerStyles,
  showIMenuButtonStyles,
} from "./ShowItems.styles";

const ShowItems: React.FC = () => {
  const { onClose } = useDisclosure();
  // muestra todo los items y sus sub items mediante .map
  return (
    <Flex __css={showIContainerStyles}>
      {listItems &&
        listItems.map((item, index) => {
          return (
            <div key={index}>
              {item.menu ? (
                <Menu key={index}>
                  <MenuButton
                    as={Button}
                    rightIcon={<Icon as={FiChevronDown} />}
                    __css={showIMenuButtonStyles}
                  >
                    <Text as="b" fontSize="md">
                      {item.name}
                    </Text>
                  </MenuButton>
                  <MenuList bg="black" border="none" zIndex={95}>
                    {item.subs &&
                      item.subs.map((subitem, subindex) => {
                        return (
                          <MenuItem
                            _hover={{ backgroundColor: "none" }}
                            _focus={{
                              backgroundColor: "none",
                              color: "#6b46c1",
                            }}
                            key={subindex}
                          >
                            <Link to={item.url}>
                              <Text
                                as="b"
                                fontSize="md"
                                _hover={{
                                  backgroundColor: "none",
                                  color: "#6b46c1",
                                }}
                              >
                                {subitem}
                              </Text>
                            </Link>
                          </MenuItem>
                        );
                      })}
                  </MenuList>
                </Menu>
              ) : (
                <Link to={item.url} onClick={onClose} key={index}>
                  <Text
                    as="b"
                    fontSize="md"
                    _hover={{ backgroundColor: "none", color: "#6b46c1" }}
                  >
                    {item.name}
                  </Text>
                </Link>
              )}
            </div>
          );
        })}
    </Flex>
  );
};

export default ShowItems;
