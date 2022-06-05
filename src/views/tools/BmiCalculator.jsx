import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const BmiCalculator = () => {
  const [formData, setFormData] = useState();
  const [bmi, setBmi] = useState();

  const calculateBMI = () => {};

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
          <Button variant="outlined">CALCULATE</Button>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Typography variant="body1">Your BMI (Body Mass Index) is:</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BmiCalculator;
