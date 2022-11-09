import {
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
} from "react-icons/ai";
import SearchDrawer from "./drawers/SearchDrawer";
import Product from "../../models/product.model";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../app/features/products/productsSlice";
import SearchItem from "./search-item/SearchItem";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import {
  searchBarBox,
  searchBarContainer,
  searchBarResults,
} from "./SearchBar.styles";
import filterByString from "../../utilities/filter-by-string.utility";

const SearchBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = React.useRef<any>();
  const searchRef = React.useRef<any>();
  const [animation, setAnimation] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");

  const productsApi: Product[] = useSelector(selectAllProducts);

  const heightGral = useBreakpointValue({
    base: "50px",
    md: "50px",
    lg: "25px",
  });

  const displayMobile = useBreakpointValue({
    base: "flex",
    md: "flex",
    lg: "none",
  });

  const displayDesktop = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "flex",
  });

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSearchKey(e.target.value);
  };

  const handleAnimationBar = () => {
    setAnimation(!animation);
    setSearchKey("");
  };

  const handleClearInput = () => {
    setSearchKey("");
    searchRef.current.value = "";
  };

  return (
    <>
      <Flex>
        <InputGroup bg="white" justifyContent="center" display={displayMobile}>
          <Flex p={2}>
            <Icon as={TbSearch} />
          </Flex>
          <Input
            type="tel"
            placeholder="Products"
            bg="white"
            size="sm"
            _focus={{ outline: "none", border: "none", textDecoration: "none" }}
            ref={inputRef}
            onClick={onOpen}
          />
          <SearchDrawer isOpen={isOpen} onClose={onClose} inputRef={inputRef} />
        </InputGroup>
      </Flex>
      <Flex // search bar container
        className={animation ? "upDown" : "downUp"}
        h={heightGral}
        __css={searchBarContainer}
      >
        <Flex
          h={animation ? "60%" : "0%"}
          display={displayDesktop}
          __css={searchBarBox}
        >
          <InputGroup w="40%" h="65%" display={animation ? "flex" : "none"}>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineSearch} />}
              h="100%"
            />
            <Input
              type="tel"
              bg="white"
              borderRadius="2px"
              placeholder="Products"
              h="100%"
              ref={searchRef}
              onChange={(e) => handleChange(e)}
            />
            <InputRightElement h="100%">
              <Button
                bg="none"
                w="100%"
                h="100%"
                _hover={{ backgroundColor: "none", color: "#9F7AEA" }}
                _active={{ backgroundColor: "none", color: "#9F7AEA" }}
                onClick={() => handleClearInput()}
              >
                <Icon as={IoIosClose} boxSize="7" />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex
            display={searchKey !== "" ? "flex" : "none"}
            __css={searchBarResults}
          >
            {filterByString(productsApi, searchKey).map((item: Product) => {
              return (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={() => handleClearInput()}
                >
                  <SearchItem product={item} />
                  <Divider />
                </Link>
              );
            })}
          </Flex>
        </Flex>

        <Flex
          h={animation ? "40%" : "100%"}
          borderTop="1px solid white"
          display={displayDesktop}
        >
          <Button
            bg="none"
            h="95%"
            w="100%"
            _focus={{ backgroundColor: "none" }}
            _hover={{ backgroundColor: "none" }}
            onClick={() => handleAnimationBar()}
          >
            <Icon
              as={animation ? AiFillCaretUp : AiFillCaretDown}
              color="white"
            />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SearchBar;
