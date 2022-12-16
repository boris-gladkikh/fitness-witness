import { Box } from "@mui/system";
import { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";


const MealCalendar = () => {
  const [formData, setFormData] = useState();

  return (
    <>
      <Box
        px={2}
        py={2}
        textAlign="center"
        // sx={{
        //   border: "1px solid black",
        // }}
      >
        <Calendar/>
      </Box>
    </>
  );
};

export default MealCalendar;
