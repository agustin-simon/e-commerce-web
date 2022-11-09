import { Flex } from "@chakra-ui/react";
import sectionsCard from "../../data/SectionsCard";
import Card from "./components/card/Card";

const InfoSection: React.FC = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      justifyContent="center"
      alignItems="center"
      mt="10"
    >
      {sectionsCard &&
        sectionsCard.map((item, index) => {
          return <Card key={index} icon={item.icon} text={item.text} />;
        })}
    </Flex>
  );
};

export default InfoSection;
