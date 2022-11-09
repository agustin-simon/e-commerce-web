import {
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../app/store";
import {
  getTotals,
  selectAllCartItems,
} from "../../../../app/features/cart/cartSlices";
import Product from "../../../../models/product.model";
import CartItemDrawer from "../cart-item/CartItemDrawers";

interface SearchDrawerElem {
  isOpen: boolean;
  onClose: () => void;
  inputRef: any;
}

const ShopCart: React.FC<SearchDrawerElem> = (props: SearchDrawerElem) => {
  const { isOpen, onClose, inputRef } = props;

  const items: Product[] = useSelector(selectAllCartItems);

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={inputRef}
    >
      <DrawerOverlay />
      <DrawerContent h="100%">
        <DrawerCloseButton />
        <DrawerHeader>Shop Cart</DrawerHeader>

        <DrawerBody>
          {items.map((item: Product) => {
            return (
              <>
                <CartItemDrawer key={item.id} product={item} />
                <Divider mt="2" />
              </>
            );
          })}

          {items.length === 0 ? (
            <Text color="gray.500">There are no products in the cart.</Text>
          ) : (
            ""
          )}
        </DrawerBody>

        <DrawerFooter display="flex">
          <Text as="b" p="2">
            Total: ${cart.cartTotalAmount}
          </Text>
          <Button variant="outline" mr={3} onClick={onClose}>
            <Link to="/cart">View Cart</Link>
          </Button>
          <Button
            backgroundColor="purple.600"
            color="white"
            isDisabled={items.length === 0 ? true : false}
          >
            Buy
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShopCart;
