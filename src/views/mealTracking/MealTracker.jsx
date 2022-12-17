import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const MealTracker = () => {
  return (
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
        Meal Tracking
      </Typography>
      <Typography variant="body1" px={2} py={1}>
        Knowledge is power. You can track your meal and calorie intake below in
        order to focus on trends, create good habits, and take charge of your
        diet and nutrition.
      </Typography>
      <Typography variant="body2" px={2} py={1}>
        Enter your data below to save it to your meal calendar.
      </Typography>
    </Box>
  );
};

export default MealTracker;
