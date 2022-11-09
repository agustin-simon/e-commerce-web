import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import Product from "../../../../models/product.model";

interface Props {
  activeProduct: Product | undefined;
  handleSelectSize: Function;
}

const SizesList: React.FC<Props> = ({ activeProduct, handleSelectSize }) => {
  return (
    <Flex wrap="wrap">
      <Tabs variant="unstyled">
        <TabList>
          {activeProduct?.sizes.map((item, index) => {
            return (
              <Tab
                key={index}
                _selected={{ color: "white", bg: "purple.600" }}
                onClick={(e) => handleSelectSize(e)}
                value={item}
                border="1px solid black"
              >
                {item}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default SizesList;
