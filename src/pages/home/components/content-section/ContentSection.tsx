import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { GiConverseShoe } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { IoBasketball } from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
import {
  contSectBoxStyles,
  contSectContainerStyles,
} from "./ContentSection.styles";

/**
  Este componente carga una lista de divs que utilizamos como enlace para desplazarnos a ciertos lugares de la web.
*/

const ContentSection: React.FC = () => {
  // media queries - ancho div section
  const widthDivSection = useBreakpointValue({
    base: "46%",
    md: "46%",
    lg: "20%",
  });
  // media queries - altura div section
  const heightDivSection = useBreakpointValue({
    base: "47%",
    md: "47%",
    lg: "55%",
  });
  // media queries - margen container
  const marginContainer = useBreakpointValue({
    base: "5    ",
    md: "5",
    lg: "20",
  });
  // media queries - altura container
  const heightContainer = useBreakpointValue({
    base: "550px",
    md: "550px",
    lg: "250px",
  });

  return (
    <Flex
      h={heightContainer}
      w="100%"
      wrap="wrap"
      p={2}
      alignItems="center"
      justifyContent="space-around"
      mt={marginContainer}
    >
      <Flex
        w={widthDivSection}
        h={heightDivSection}
        bg="purple.600"
        className="selectedOn"
        __css={contSectBoxStyles} // styles
      >
        <Icon as={GiConverseShoe} color="white" w="40%" h="50%" />
        <Text fontSize="2xl" color="white">
          Shoes
        </Text>
      </Flex>
      <Flex
        bg="black"
        w={widthDivSection}
        h={heightDivSection}
        className="selectedOn"
        __css={contSectBoxStyles} // styles
      >
        <Icon as={IoBasketball} color="white" w="40%" h="50%" />
        <Text fontSize="2xl" color="white">
          Balls
        </Text>
      </Flex>
      <Flex
        bg="black"
        w={widthDivSection}
        h={heightDivSection}
        className="selectedOn"
        __css={contSectBoxStyles} // styles
      >
        <Icon as={ImUsers} color="white" w="35%" h="50%" />
        <Text fontSize="2xl" color="white">
          About us
        </Text>
      </Flex>
      <Flex
        bg="purple.600"
        w={widthDivSection}
        h={heightDivSection}
        className="selectedOn"
        __css={contSectBoxStyles} // styles
      >
        <Icon as={RiQuestionMark} color="white" w="40%" h="50%" />
        <Text fontSize="2xl" color="white">
          Help
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContentSection;
