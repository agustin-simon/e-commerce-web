import {
  Box,
  Button,
  Flex,
  FormLabel,
  Icon,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const AboutUs: React.FC = () => {
  const [sendLoading, setSendLoading] = useState<boolean>(false);

  const marginVariant = useBreakpointValue({
    base: "2",
    md: "2",
    lg: "0",
  });

  const heightInputs = useBreakpointValue({
    base: "95%",
    lg: "55%",
  });

  const handleSendData = () => {
    setSendLoading(true);
    setTimeout(() => {
      setSendLoading(false);
    }, 4000);
  };

  return (
    <Flex
      boxShadow="md"
      m={marginVariant}
      flexDirection={["column", "column", "column", "row"]}
      justifyContent="center"
      alignItems="flex-start"
      p={["4", "4", "4", "14"]}
    >
      <Flex
        w="100%"
        bgGradient="linear(rgba(107,70,193,1) 35%, rgba(255,255,255,1) 35%)"
        minH="88vh"
        flexDirection="column"
        alignItems="center"
        p="2"
        boxShadow="md"
      >
        <Text fontSize="3xl" color="white" mt="14">
          About Us
        </Text>
        <Flex
          bg="white"
          w="90%"
          h="90%"
          boxShadow="md"
          flexDirection={["column", "column", "column", "row", "row"]}
          alignItems="center"
          p="10"
          mt="14"
        >
          <Flex
            w="80%"
            h="80px"
            justifyContent="center"
            alignItems="center"
            p="4"
            boxShadow="md"
            mt="4"
            flexDirection="column"
          >
            <Icon as={BsTelephoneFill} w={5} h={5} color="#6b46c1" />
            <Text as="b" fontSize="lg" mt="2" color="gray.600">
              11242456
            </Text>
          </Flex>
          <Flex
            w="80%"
            h="80px"
            justifyContent="center"
            alignItems="center"
            p="4"
            boxShadow="md"
            mt="4"
            flexDirection="column"
          >
            <Text as="i" fontSize="lg" color="gray.400">
              mark@gmail.com
            </Text>
          </Flex>
          <Flex
            w="80%"
            h="80px"
            justifyContent="center"
            alignItems="center"
            p="4"
            boxShadow="md"
            mt="4"
            flexDirection="column"
          >
            <Icon as={MdLocationPin} w={6} h={6} color="#6b46c1" />
            <Text as="b" fontSize="lg" mt="2" color="gray.600">
              Address 141
            </Text>
          </Flex>
        </Flex>

        <Text as="b" fontSize="2xl" p="2" mt="4">
          Send us your doubts
        </Text>
        <Flex w="90%" flexDirection="column" p="3" alignItems="center">
          <Box p="4" w={heightInputs}>
            <FormLabel fontSize="sm">Name</FormLabel>
            <Input
              placeholder="Name"
              size="md"
              borderRadius="0px"
              color={"#6b46c1"}
            />
          </Box>
          <Box p="4" w={heightInputs}>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input
              placeholder="Email"
              size="md"
              borderRadius="0px"
              color={"#6b46c1"}
            />
          </Box>
          <Box p="4" w={heightInputs}>
            <FormLabel fontSize="sm">Comentary</FormLabel>
            <Input
              placeholder="Comentary"
              size="md"
              h="100px"
              borderRadius="0px"
              color={"#6b46c1"}
            />
          </Box>
          <Button
            borderRadius="none"
            bg="purple.600"
            color="white"
            _hover={{ backgroundColor: "purple.600" }}
            w="120px"
            isLoading={sendLoading}
            onClick={() => handleSendData()}
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
