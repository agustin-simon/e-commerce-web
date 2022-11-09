import { Stack, Flex } from "@chakra-ui/react";

const Pagination: React.FC = () => {
  return (
    <Stack spacing={6} direction="row" mt="6" mb="3">
      <Flex
        color="white"
        border="1px solid black"
        justifyContent="center"
        alignItems="center"
        bg="purple.600"
        w="30px"
        h="30px"
        boxShadow="md"
      >
        1
      </Flex>
      <Flex
        color="black"
        border="1px solid black"
        justifyContent="center"
        alignItems="center"
        w="30px"
        h="30px"
        boxShadow="md"
      >
        2
      </Flex>
      <Flex
        color="black"
        border="1px solid black"
        justifyContent="center"
        alignItems="center"
        w="30px"
        h="30px"
        boxShadow="md"
      >
        3
      </Flex>
    </Stack>
  );
};

export default Pagination;
