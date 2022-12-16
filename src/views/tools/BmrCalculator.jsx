import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const BmrCalculator = () => {
  const [formData, setFormData] = useState();
  const [bmr, setBmr] = useState();

  const calculateBMR = () => {};

  return (
    <>
      <Box
        component="form"
        px={2}
        py={2}
        textAlign={"left"}
        sx={{
          border: "1px solid black",
        }}
      >
        <Box px={2} py={2} width={"100%"}>
          <FormControl sx={{ minWidth: 195 }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select label="Gender">
      
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box px={2} py={2}>
          <TextField variant="outlined" label="Height" />
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <TextField variant="outlined" label="Weight" />
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <TextField variant="outlined" label="Age" />
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <FormControl sx={{ minWidth: 195 }}>
            <InputLabel id="activityLevel">Activity Level</InputLabel>
            <Select label="Activity Level">
              <MenuItem value="">Little to no exercise</MenuItem>
              <MenuItem value={10}>Light exercise</MenuItem>
              <MenuItem value={20}>mid-regular exercise</MenuItem>
              <MenuItem value={20}>Frequent, high intensity exercise</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Button type="submit" variant="outlined">CALCULATE</Button>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Typography variant="body1">Your BMR is:</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BmrCalculator;
