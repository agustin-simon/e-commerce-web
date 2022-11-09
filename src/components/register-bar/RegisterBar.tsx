import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { registerBarContStyles } from "./RegisterBar.styles";

/**
    Este componente renderiza un div con una descripcion y un boton para poder registrarnos en la web.
 */

const RegisterBar: React.FC = () => {
  return (
    <Flex __css={registerBarContStyles}>
      <Text as="b" fontSize="xl" color="white" w="90%" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        efficitur.
      </Text>
      <Button
        bg="white"
        outline="1px solid white"
        outlineOffset="3px"
        borderRadius="0px"
        mt="6"
      >
        Register
      </Button>
    </Flex>
  );
};

export default RegisterBar;
