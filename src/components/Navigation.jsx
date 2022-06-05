import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const pages = [
    {
      title:'Fitness Tools',
      url: 'tools',
    },
    {
      title:'Meal Tracking',
      url: 'mealtracker',
    },
    {
      title:'Recipe Tracking',
      url: 'recipetracker',
    },
    {
      title:'Beans',
      url: 'beans',
    },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FIT-WIT
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              {pages.map((page) => (
                <Typography
                  variant="p"
                  mx={2}
                  component="a"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href={`/${page.url}`}
                >
                  {page.title}
                </Typography>
              ))}
            </Box>
            <Typography
              variant="p"
              noWrap
              component="a"
              href="/login"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
              color="inherit"
            >
              Login
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
