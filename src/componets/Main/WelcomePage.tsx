import { Box, Typography, Button } from "@mui/material";

const WelcomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
        bgcolor: "transparent", 
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 4, md: 0 },
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.jpg"
          alt="Food Delivery"
       className="welcome-image"
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#ff0000", 
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Tez va Mazali!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: "1.2rem",
          }}
        >
          Sevimli taomlaringizni uyga tez yetkazib beramiz. Biz bilan buyurtma
          berish juda oson va qulay!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#ff0000", 
            "&:hover": { bgcolor: "#cc0000" },
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Buyurtma Berish
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
