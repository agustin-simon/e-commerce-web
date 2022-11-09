import { Flex, useBreakpointValue } from "@chakra-ui/react";
import SearchBar from "../search-bar/SearchBar";
import { navBarStyle, navContainerStyle } from "./Nav.styles";
import ShowItems from "./show-items/ShowItems";

const Nav: React.FC = () => {
  const displayLinksBar = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "flex",
  });

  return (
    <>
      <Flex __css={navBarStyle}></Flex>
      {/* // div container del componente de presentacion que muestra los items */}
      <Flex __css={navContainerStyle} display={displayLinksBar}>
        {/*  componente de presentacion (items.map) */}
        <ShowItems />
      </Flex>
      <SearchBar />
    </>
  );
};

export default Nav;
