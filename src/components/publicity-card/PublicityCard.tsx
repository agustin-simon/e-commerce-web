import { Flex, Box, Text, Icon, Button } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import background from "../../assets/images/background.png";

const PublicityCard: React.FC = () => {
  return (
    <Flex
      bg="white"
      w="310px"
      h="200px"
      border="1px solid white"
      color="purple.600"
      boxShadow="md"
      mb="14px"
      flexDirection="column"
      outline="1.5px solid white"
      outlineOffset="-6px"
    >
      <Box
        bgImg={background}
        backgroundSize="cover"
        backgroundPosition="center"
        w="100%"
        h="80%"
      ></Box>
      <Button
        bg="none"
        display="flex"
        justifyContent="space-between"
        borderRadius="0px"
      >
        <Text fontSize="md" p="2">
          See more
        </Text>
        <Icon as={BsArrowRight} w="7" h="5" />
      </Button>
    </Flex>
  );
};

export default PublicityCard;
