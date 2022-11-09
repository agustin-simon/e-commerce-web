import { Flex, Spinner } from "@chakra-ui/react";

const FullPageLoading: React.FC = () => {
  return (
    <Flex
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="white"
      opacity="55%"
      zIndex="100"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple.600"
        size="xl"
      />
    </Flex>
  );
};

export default FullPageLoading;
