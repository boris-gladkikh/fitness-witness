import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const RecipesPage = () => {
  return (
    <Container>
      <Paper elevation={3}>
        <Box textAlign={"left"} my={5}>
          <Typography
            px={2}
            py={2}
            variant="h4"
            noWrap
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Recipes - Coming Soon!
          </Typography>
          {/* <Box px={2} py={1}>
            <Button variant="outlined">ADD RECIPE</Button>
          </Box> */}
          <Typography variant="body1" px={2} py={1}>
            Browse, view, or edit recipes you have added and saved.
          </Typography>
          <Typography variant="body2" px={2} py={1}>
            (COMING SOON)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default RecipesPage;
