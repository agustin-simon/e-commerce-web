import {
  Center,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import LoginSection from "./components/login-section/LoginSection";
import RegisterSection from "./components/register-section/RegisterSection";

const ProfileLogin: React.FC = () => {
  const marginVariant = useBreakpointValue({
    base: "2",
    md: "2",
    lg: "10",
    xl: "50px 100px 55px 100px",
  });

  return (
    <>
      <Flex
        bg="white"
        boxShadow="md"
        m={marginVariant}
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems="flex-start"
        p={["4", "4", "4", "24"]}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          mr={["0", "0", "0", "2", "6"]}
          alignItems={["center", "center", "center", "flex-end"]}
          w={["100%", "100%", "100%", "80%"]}
        >
          <Text as="b" fontSize="2xl" p="2">
            Login
          </Text>
          <LoginSection />
        </Flex>

        <Center
          h="10px"
          w={["100%", "50%", "70%", "50%"]}
          p="6"
          mt="4"
          display={["flex", "flex", "flex", "none"]}
        >
          <Divider orientation="horizontal" />
        </Center>

        <Flex
          flexDirection="column"
          justifyContent="center"
          ml={["0", "0", "0", "2", "6"]}
          alignItems={["center", "center", "center", "flex-start"]}
          w={["100%", "100%", "100%", "80%"]}
        >
          <Text as="b" fontSize="2xl" p="2">
            Register
          </Text>
          <RegisterSection />
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileLogin;
