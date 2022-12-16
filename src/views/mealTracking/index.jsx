import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MealCalendar from "./MealCalendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const MealTracking = () => {
  const [expandedMealTrack, setExpandedMealTrack] = useState(false);

  const handleClickMealTrack = () => {
    setExpandedMealTrack(!expandedMealTrack);
  };

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
            Meal Tracking
          </Typography>
          <Typography variant="body1" px={2} py={1}>
            Knowledge is power. You can track your meal and calorie intake below
            in order to focus on trends, create good habits, and take charge of
            your diet and nutrition.
          </Typography>
          <Typography variant="body2" px={2} py={1}>
            Enter your data below to save it to your meal journal.
          </Typography>
        </Box>
        <Accordion expanded={expandedMealTrack}>
          <AccordionSummary>
            <Box px={2} py={2} width={"100%"}>
              <Button variant="outlined" onClick={handleClickMealTrack}>
               {expandedMealTrack ? "CANCEL":"ADD MEAL"}
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>BIG MEAT HOAGIE</AccordionDetails>
        </Accordion>
      </Paper>
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
            Meal Calendar
          </Typography>
          <MealCalendar />
        </Box>
      </Paper>
    </Container>
  );
};

export default MealTracking;
