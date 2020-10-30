import { getYear } from "date-fns";
import { Box, Flex, Text } from "theme-ui";

export default function Footer() {
  return (
    <Box
      sx={{
        bg: "secondary",
        p: 2,
      }}
    >
      <Flex
        as="footer"
        variant="styles.container"
        sx={{ justifyContent: "space-between", fontSize: 1, color: 'background' }}
      >
        <Box>
          <Text>© {getYear(new Date())} Cascina Rampina.</Text>
          <Text>Via Donatello, 5 - Monticello brianza, lecco</Text>
        </Box>
        Azienda Agricola Cascina Rampina | Powered by ❤️
      </Flex>
    </Box>
  );
}
