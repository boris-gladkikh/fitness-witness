import { Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";

const AddMealDialog = ({ setOpenDialog, openDialog }) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  //todo: finish a row that adds food item/calories to meal and total calories. write out data structure for this above
  const AddFoodRow = () => {
    return (
      <>
        <Box py={3} display="flex" gap={'5px'}>
          <TextField
            size={"small"}
            sx={{ width: "45%" }}
            label="Name"
          ></TextField>
          <TextField
            size={"small"}
            sx={{ width: "20%" }}
            label="Qty."
          ></TextField>
          <TextField
            size={"small"}
            sx={{ width: "20%" }}
            type={"number"}
            label="Calories"
          ></TextField>
            <Button color={"primary"} variant="contained" >
              ADD
            </Button>
       
        </Box>
      </>
    );
  };
  return (
    <>
      <Dialog fullWidth open={openDialog}>
        <DialogTitle>ADD MEAL</DialogTitle>
        <DialogContent>
          <Box py={1}>
            <Typography variant="body1">
              Enter each ingredient and approximate caloric value from the
              nutrition facts.
            </Typography>
            <br />
            <Typography variant="body2">
              Add each row to your meal - once all of your ingredients are
              added, click 'save' to save your current meal.
            </Typography>
            <Box py={2}>
              <TextField
                size={"small"}
                variant={"outlined"}
                label="Meal Title"
              ></TextField>
            </Box>
            <AddFoodRow />
          </Box>
          <Box>
            <Typography variant="body1">Total Meal:</Typography>
            <Typography variant="body1">Total Cal: 123123</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddMealDialog;
