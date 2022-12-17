import { Container, Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MealCalendar from "./MealCalendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import MealTracker from "./MealTracker";
import AddMealDialog from "./AddMealDialog";

const MealTracking = () => {
  const [openMealDialog, setOpenMealDialog] = useState(false);

  const handleOpenMealDialog = () => {
    setOpenMealDialog(!openMealDialog);
  };

  return (
    <Container>
      <Paper elevation={3}>
        <MealTracker />
        <Box px={2} py={2} width={"100%"}>
          <Button variant="outlined" onClick={handleOpenMealDialog}>
            {openMealDialog ? "CANCEL" : "ADD MEAL"}
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3}>
        <MealCalendar />
      </Paper>
      <AddMealDialog
        openDialog={openMealDialog}
        setOpenDialog={setOpenMealDialog}
      />
    </Container>
  );
};

export default MealTracking;
