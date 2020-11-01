import { getYear } from "date-fns";
import { Box, Grid, Link, Text } from "theme-ui";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Grid
        as="footer"
        variant="styles.container"
        columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={2}
        sx={{
          fontSize: 1,
        }}
      >
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 700, mb: 2 }}>
            © {getYear(new Date())} Azienda Agricola Cascina Rampina.
          </Text>
          <Text>Via Donatello, 5</Text>
          <Text>Monticello brianza, lecco</Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 700, mb: 2 }}>
            Orari del negozio:
          </Text>
          <Text>
            <strong>martedì</strong> dalle 14 alle 19
          </Text>
          <Text>
            <strong>sabato</strong> dalle 9 alle 12
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 700, mb: 2 }}>Seguici:</Text>
          <Text>
            <Link
              href="https://www.facebook.com/cascinarampina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <span> • </span>
            <Link
              href="https://www.instagram.com/cascinarampina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </Text>
          <Text>Powered by ❤️</Text>
        </Box>
      </Grid>
    </Box>
  );
}