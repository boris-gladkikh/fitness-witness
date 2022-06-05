import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BmrCalculator from "./BmrCalculator";
import BmiCalculator from "./BmiCalculator";

const Tools = () => {
  return (
    <>
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
              BMR (Basal Metabolic Rate) Calculator
            </Typography>
            <Typography variant="body1" px={2} py={1}>
              Basal Metabolic Rate is the amount of calories required for your
              body to function at rest. BMR is also known as your metabolism -
              any increase to your metabolic weight, such as exercise, will
              increase your BMR.
            </Typography>
            <Typography variant="body2" px={2} py={1}>
              To get your BMR, enter your height, gender, age and weight below.
              Once you determine your BMR, you can begin to monitor how many
              calories a day you need to gain, maintain or lose weight.
            </Typography>
          </Box>
          <Box>
            <BmrCalculator />
          </Box>
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
              BMI (Body Mass Index) Calculator
            </Typography>
            <Typography variant="body1" px={2} py={1}>
              Body mass index is a measure of one's overall health. Although BMI
              does not measure body fat directly, it can be used as an excellent
              indicator of one's health and susceptibility to cardiovascular
              complications, diabetes, and other health conditions.
            </Typography>
            <Typography variant="body2" px={2} py={1}>
              <strong>BMI below 18.5:</strong> Your BMI is considered
              underweight, and may lead to its own health risks.
            </Typography>
            <Typography variant="body2" px={2} py={1}>
              <strong>BMI is 18.5 - 24.9:</strong> Your BMI is considered
              normal.
            </Typography>
            <Typography variant="body2" px={2} py={1}>
              <strong>BMI is 25-29.9:</strong> Your BMI is considered
              overweight. Consider improving your eating habits and fitness activities.
            </Typography>
            <Typography variant="body2" px={2} py={1}>
              <strong>BMI is above 30:</strong> Your BMI is considered
              obese. You are at very increased risk for many diseases and health conditions. 
              Consider improving your eating habits and fitness activities in order to live a long and healthy life.

            </Typography>
          </Box>
          <Box>
            <BmiCalculator />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Tools;
