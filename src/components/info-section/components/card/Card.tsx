import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  text: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { icon, text } = props;
  return (
    <Flex
      bg="white"
      p={3}
      alignItems="center"
      color="black"
      boxShadow="md"
      w="240px"
      minH="260px"
      flexDirection="column"
      justifyContent="space-around"
      border="2px solid #6b46c1"
      m="3"
      outline="1px solid black"
      outlineOffset="-5px"
    >
      <Icon as={icon} w="45%" h="50%" color="purple.600" />
      <Text as="cite" w="100%" textAlign="center">
        {text}
      </Text>
    </Flex>
  );
};

export default Card;
