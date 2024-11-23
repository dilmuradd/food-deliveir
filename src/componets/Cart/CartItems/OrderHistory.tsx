import { Box, Button, Card, CardContent,  Typography } from "@mui/material";
import { FaHistory } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useOrderStore } from "../../../store/useOrderHistory";
import useThemeStore from "../../../store/useThemeStore";



const OrderHistory: React.FC = () => {
  let  {orders,clearOrders} = useOrderStore()
let handleDelete = ()=>{
    clearOrders()
}
let {useTheme} = useThemeStore()
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" px="20px">
        <Box display="flex" mt="30px" justifyContent="center" alignItems="center" gap="10px">
          <FaHistory color={useTheme ? "#000" : "#fff"} />
          <Typography component={'h1'} variant="h5" color={useTheme ? "#000" : "#fff"} >Order History</Typography>
        </Box>

        <Box display="flex" mt="30px" justifyContent="center" alignItems="center" gap="10px">
          <Button onClick={handleDelete} variant="outlined" startIcon={<FaDeleteLeft />} >
            Clear
          </Button>
        </Box>
      </Box>

      <Box mt="20px" px="20px" marginTop={'30px'} pb={'30px'}>
        {orders.length > 0 ? (
          <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="20px">
            {orders.map((item) => (
              <Card  key={item.id} sx={{ boxShadow: 3, borderRadius: 2 , bgcolor: useTheme ? "#fff" : "#fff" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.category}</Typography>
                  <Typography variant="body1" color="primary">${item.price}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
            <Box display={'flex'} gap={'20px'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'} minHeight={'50vh'}>

          <img className="img-data" src="https://cdn-icons-png.flaticon.com/256/7466/7466140.png" alt="no-data" />
          <Typography color={useTheme ? "#000" : "#fff"}>Siz mahsulot buyrutma qilmagansiz</Typography>
            </Box>
        )}
      </Box>
    </Box>
  );
};

export default OrderHistory;
