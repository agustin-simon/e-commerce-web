import { Box, Text, useBreakpointValue, Stack } from "@chakra-ui/react";
import Carrousel from "../../components/carrousel/Carrousel";
import InfoSection from "../../components/info-section/InfoSection";
import PublicityCard from "../../components/publicity-card/PublicityCard";
import RegisterBar from "../../components/register-bar/RegisterBar";
import ContentSection from "./components/content-section/ContentSection";
import MainBanner from "./components/main-banner/MainBanner";

const Home: React.FC = () => {
  const marginVariant = useBreakpointValue({
    base: "2",
    md: "2",
    lg: "2",
  });

  const directionVariant = useBreakpointValue({
    base: "column",
    md: "column",
    lg: "row",
  });

  return (
    <Box bg="white" boxShadow="md" m={marginVariant}>
      <MainBanner />
      <ContentSection />
      <Text
        fontSize="2xl"
        w="100%"
        h="10"
        color="purple.600"
        textAlign="center"
      >
        Some products
      </Text>
      <Carrousel />
      <RegisterBar />
      <InfoSection />
      <Box
        w="100%"
        h="70px"
        bgGradient="linear-gradient(270deg, rgba(0,0,0,1) 50%, rgba(107,70,193,1) 50%)"
        mt="10"
        mb="10"
      ></Box>
      <Stack
        spacing="4"
        justifyContent="center"
        alignItems={["center", "flex-start", "flex-start"]}
        direction={["column", "column", "row"]}
        padding="2"
      >
        <PublicityCard />
        <PublicityCard />
        <PublicityCard />
      </Stack>
      <Box
        w="100%"
        h="70px"
        bgGradient="linear-gradient(270deg, rgba(0,0,0,1) 50%, rgba(107,70,193,1) 50%)"
        mt="10"
        mb="10"
      ></Box>
    </Box>
  );
};

export default Home;
