import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const CommunityPage = () => {
  return (
    <Container>
      <Paper elevation={3}>
        <Box textAlign={"left"} my={5}>
          <Typography
            px={2}
            py={2}
            variant="h6"
            noWrap
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Community - Coming Soon!
          </Typography>
          <Typography variant="body1" px={2} py={1}>
            This will be a place for searching public profiles, sharing recipes,
            and general community discussion!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
export default CommunityPage;
