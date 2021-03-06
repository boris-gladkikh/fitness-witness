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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Button variant="outlined">CALCULATE</Button>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Typography variant="body1">Your BMR is:</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BmrCalculator;
