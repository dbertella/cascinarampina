import dayjs from "dayjs";
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
        gap={3}
        sx={{
          fontSize: 1,
        }}
      >
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: 700, mb: 2 }}>
            © {dayjs().get("year")} AZ. Agricola Cascina Rampina di Mauri
            Fabrizio
          </Text>
          <Text>CUAA: MRAFRZ83E27A818H - P.I. 03110850132</Text>
          <Text>Sede: Via Donatello 5 a Monticello Brianza (MB) - 23876</Text>
          <Link
            rel="noreferrer noopener"
            href="https://wa.me/393246960519"
            target="_blank"
          >
            +39 324 696 0519
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: 700, mb: 2 }}>
            Orari di apertura del nostro punto vendita:
          </Text>
          <Text>
            <strong>Martedì</strong> dalle 14 alle 19
          </Text>
          <Text>
            <strong>Sabato</strong> dalle 9 alle 17
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 3, fontWeight: 700, mb: 2 }}>Seguici:</Text>
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
          <Text>Made with ❤️</Text>
        </Box>
      </Grid>
    </Box>
  );
}
