import {
  Box,
  Flex,
  FormLabel,
  Input,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const LoginSection: React.FC = () => {
  const heightGral = useBreakpointValue({
    base: "100%",
    sm: "80%",
    md: "50%",
    lg: "70%",
  });

  return (
    <Flex
      w={heightGral}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border="1px solid #6b46c12f"
      p="4"
      outlineOffset="2px"
      boxShadow="md"
    >
      <Box mt="4" w="75%">
        <FormLabel fontSize="sm">Email *</FormLabel>
        <Input
          placeholder="Email"
          size="md"
          borderRadius="0px"
          _focus={{ border: "0px" }}
          _active={{ border: "0px" }}
        />
      </Box>
      <Box mt="4" w="75%">
        <FormLabel fontSize="sm">Password *</FormLabel>
        <Input
          placeholder="Password"
          type="password"
          size="md"
          borderRadius="0px"
          _focus={{ border: "0px" }}
          _active={{ border: "0px" }}
        />
      </Box>
      <Flex w="80%" p="2">
        <Checkbox defaultChecked fontSize="sm" color="gray.500">
          Remember me
        </Checkbox>
      </Flex>
      <Button
        borderRadius="none"
        bg="purple.600"
        color="white"
        _hover={{ backgroundColor: "purple.600" }}
        minW="100px"
        mt="4"
      >
        Login
      </Button>
    </Flex>
  );
};

export default LoginSection;
