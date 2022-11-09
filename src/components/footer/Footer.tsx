import { Flex, Icon, Text } from "@chakra-ui/react";
import { SiNike, SiAdidas, SiReebok, SiJordan } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  brandsContStyles,
  footerContStyles,
  brandBoxStyles,
  linkContStyles,
  linkBoxLeftStyles,
  linkBoxRightStyles,
  creatorBoxStyles,
} from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <Flex __css={footerContStyles}>
      <Flex __css={brandsContStyles}>
        <Flex __css={brandBoxStyles}>
          <Icon as={SiNike} w="8" h="8" color="white" />
        </Flex>
        <Flex __css={brandBoxStyles}>
          <Icon as={SiAdidas} w="8" h="8" color="white" />
        </Flex>
        <Flex __css={brandBoxStyles}>
          <Icon as={SiReebok} w="10" h="10" color="white" />
        </Flex>
        <Flex __css={brandBoxStyles}>
          <Icon as={SiJordan} w="8" h="8" color="white" />
        </Flex>
      </Flex>
      <Flex __css={linkContStyles}>
        <Flex __css={linkBoxLeftStyles}>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
        </Flex>
        <Flex
          bg="purple.600"
          flexDirection="column"
          outlineOffset="-6px"
          justifyContent="space-around"
          p="6"
          outline="1px solid white"
        >
          <Icon as={BsInstagram} w="8" h="8" />
          <Icon as={BsFacebook} w="8" h="8" />
          <Icon as={AiFillTwitterCircle} w="9" h="9" />
        </Flex>
        <Flex __css={linkBoxRightStyles}>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
          <Text as="b">Link</Text>
        </Flex>
      </Flex>
      <Flex __css={creatorBoxStyles}>
        <Text as="samp">Agustin Simon</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
