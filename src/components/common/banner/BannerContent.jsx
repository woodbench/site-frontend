import { Typography, Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid2'
import { Link } from "react-router-dom";

export const BannerContent = ({ title, subtitle, inspiration, buttonText, buttonLink }) => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    }}
  >
    <Grid container>
      <Grid size={{ xs: 12, md: 7 }}>
        <Typography
          variant="h1"
          sx={{
            justifyContent: "center",
            display: "flex",
            fontSize: "4rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: "1.3rem",
            fontStyle: "italic",
            marginLeft: "50px",
          }}
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid 
        size={{ xs: 12, md: 5 }}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            marginBottom: "15px",
          }}
        >
          {inspiration}
        </Typography>
        <Button
          component={Link}
          to={buttonLink}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "white",
            color: "#333",
            textShadow: "none",
          }}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  </Box>
);