import {
    Typography,
    CircularProgress,
    Button,
    Box,
  } from "@mui/material";
  import axios from "axios";
import { IoMdExit } from "react-icons/io";
  import { useQuery } from "react-query";
  import { useParams, useNavigate } from "react-router-dom";
  
  const DynamicPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const { isLoading, error, data } = useQuery({
      queryKey: ["product", id],
      queryFn: async () => {
        const res = await axios.get(`https://73ebc33f34c86959.mokky.dev/product/${id}`);
        return res.data;
      },
      staleTime: 20000,
    });
  
    if (isLoading)
      return (
    <Box minHeight={'100vh'}>

        <CircularProgress
          sx={{
              display: "block",
              margin: "auto",
              marginTop: "20vh",
            }}
            />
            </Box>
      );
  
    if (error)
      return (
        <Typography
          variant="h4"
          color="error"
          sx={{ textAlign: "center", marginTop: "20vh" }}
        >
          Xatolik yuz berdi!
        </Typography>
      );
  
    const { name, price, category, description, image } = data;
  
    return (
      <Box minHeight={'100vh'} px={'15px'} display={"flex"} alignItems={'center'} justifyContent={'center'}>
      
  
        <Box
          sx={{
            bgcolor:"#fff",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "20px",
            borderRadius:"20px"
          }}
        >
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: { xs: "100%", md: "50%" },
              borderRadius: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#281ccd",
              }}
            >
              {name}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "15px" }}>
              {description}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#4CAF50",
              }}
            >
              Narxi: {price} UZS
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
              Kategoriya: {category}
            </Typography>
            <Button
              variant="contained"
              onClick={()=>navigate('/')}
              color="primary"
              sx={{
                borderRadius: "30px",
                padding: "10px 30px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Ortga Qaytish <IoMdExit style={{marginLeft:"10px"}} />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default DynamicPage;
  