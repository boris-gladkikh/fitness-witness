import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

const BmiCalculator = () => {
  const [formData, setFormData] = useState();
  const [bmi, setBmi] = useState();

  const calculateBmi = () => {};

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
        <Box px={2} py={2} display={"flex"} gap="8px" width="50%">
          <TextField
            size={"small"}
            sx={{ width: "80%" }}
            variant="outlined"
            label="Height"
          />
          <TextField
            size={"small"}
            sx={{ width: "20%" }}
            variant="outlined"
            label="Units"
          />
        </Box>
        <Box px={2} py={1} display={"flex"} gap="8px" width="50%">
          <TextField
            size={"small"}
            sx={{ width: "80%" }}
            variant="outlined"
            label="Weight"
          />
          <TextField
            size={"small"}
            sx={{ width: "20%" }}
            variant="outlined"
            label="Units"
          />
        </Box>
        <Box px={2} py={1} width={"100%"}>
          <Button variant="contained" onClick={calculateBmi}>
            CALCULATE
          </Button>
        </Box>
        <Box px={2} py={2} width={"100%"}>
          <Typography variant="body1">
            Your BMI (Body Mass Index) is: {bmi}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BmiCalculator;
