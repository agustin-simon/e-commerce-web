import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllProducts } from "../../../app/features/products/productsSlice";
import Product from "../../../models/product.model";
import filterByString from "../../../utilities/filter-by-string.utility";
import SearchItem from "../search-item/SearchItem";

interface SearchDrawerElem {
  isOpen: boolean;
  onClose: () => void;
  inputRef: any;
}

const SearchDrawer: React.FC<SearchDrawerElem> = (props: SearchDrawerElem) => {
  const { isOpen, onClose, inputRef } = props;
  const [searchKey, setSearchKey] = useState<string>("");
  const searchRef = React.useRef<any>();

  const productsApi: Product[] = useSelector(selectAllProducts);

  const handleOnChange = (e: any) => {
    setSearchKey(e.target.value);
  };

  const handleClearInput = () => {
    setSearchKey("");
    searchRef.current.value = "";
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={inputRef}
    >
      <DrawerOverlay />
      <DrawerContent h="100%">
        <DrawerCloseButton onClick={() => setSearchKey("")} />
        <DrawerHeader>Search product</DrawerHeader>

        <DrawerBody>
          <Input
            placeholder="Product"
            size="md"
            borderRadius="0"
            _hover={{ border: "none" }}
            _focus={{ border: "none" }}
            _active={{ border: "none" }}
            onChange={(e) => handleOnChange(e)}
          />
          <Flex
            display={searchKey !== "" ? "flex" : "none"}
            flexDirection="column"
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
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
