import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";

const MealCalendar = () => {
  const [formData, setFormData] = useState();

  return (
    <>
      <Box textAlign={"left"} my={5}>
        <Box
          px={2}
          py={2}
          textAlign="center"
          // sx={{
          //   border: "1px solid black",
          // }}
        >
          {" "}
          <Typography
            py={2}
            variant="h4"
            noWrap
            sx={{
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              textAlign: "left",
            }}
          >
            Meal Calendar
          </Typography>
          <Typography
            py={1}
            variant="body1"
            noWrap
            sx={{
              color: "inherit",
              textDecoration: "none",
              textAlign: "left",
            }}
          >
            Click on a day to see recorded meals:
          </Typography>
          <Calendar />
        </Box>
      </Box>
    </>
  );
};

export default MealCalendar;
