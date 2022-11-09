import {
  Flex,
  Stack,
  Checkbox,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const FilterSection: React.FC = () => {
  const orderVariant = useBreakpointValue({
    base: "",
    md: "",
    lg: "-1",
  });

  return (
    <Flex
      mt="5"
      borderRight={["", "", "", "1px solid #E6E6E6"]}
      direction="column"
      p="10"
      order={orderVariant}
      w={["", "", "", "25%"]}
    >
      <Text as="b" fontSize="xl" w="100%" h="10" textAlign="center">
        Filter by Category
      </Text>

      <Stack spacing={3} direction="column" mt="4">
        <Checkbox>Filter 1</Checkbox>
        <Checkbox>Filter 2</Checkbox>
        <Checkbox>Filter 3</Checkbox>
        <Checkbox>Filter 4</Checkbox>
      </Stack>

      <Text as="b" fontSize="xl" w="100%" h="10" textAlign="center" mt="2">
        Filter by Size
      </Text>

      <Stack spacing={3} direction="column" mt="4">
        <Checkbox>37</Checkbox>
        <Checkbox>38</Checkbox>
        <Checkbox>39</Checkbox>
        <Checkbox>40</Checkbox>
      </Stack>
    </Flex>
  );
};

export default FilterSection;
