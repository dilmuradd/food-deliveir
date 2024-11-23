import { Box, Button, Typography, TextField, MenuItem, InputLabel, FormControl } from "@mui/material";
import useLocalStore from "../../store/useLocalStore";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import Select from '@mui/material/Select';
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdArrowBack } from "react-icons/io";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import OrderHistory from "./CartItems/OrderHistory";
import { useOrderStore } from "../../store/useOrderHistory";
import useThemeStore from "../../store/useThemeStore";

const CartPage = () => {
  let {useTheme} = useThemeStore()
  const { useLocalObject, increaseCount, decreaseCount, removeProduct } = useLocalStore();
  const [Info, setInfo] = useState<boolean>(false);

  useEffect(() => {
    if (useLocalObject.length === 0) setInfo(true);
    else setInfo(false);
  }, [useLocalObject]);

  const handleCountPlus = (id: number) => increaseCount(id);
  const handleCountMinus = (id: number) => decreaseCount(id);
  const handleDelete = (id: number) => removeProduct(id);

  const totalPrice = useLocalObject.reduce(
    (total: number, item) => total + item.price * item.count,
    0
  );

  let itemProduct = useLocalObject.map((value) => ({
    productId: value.id,
    quantity: value.count,
  }));

  interface Order {
    address: string;
    phone: string;
    paymentType: 'cash' | 'card';
    comment?: string;
  }

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Order>();
  const onSubmit: SubmitHandler<Order> = (data) => {
    mutation.mutate({
      ...data,
      items: itemProduct,
    });
  };

  const queryClient = useQueryClient();
  const { clearStore } = useLocalStore();

  const postData = async (data: Order & { items: object }) => {
    const res = await axios.post("https://73ebc33f34c86959.mokky.dev/order", {
      ...data,
      items: itemProduct,
    });
    return res.data;
  };
  let {addOrders} = useOrderStore()
  const mutation = useMutation(postData, {
    onSuccess: () => {
      addOrders(useLocalObject)
      clearStore();
      
      localStorage.removeItem('cart');
      queryClient.invalidateQueries('orders');
      alert('Xaridingiz uchun rahmat');
    },
    onError: () => {
      alert('Xatolik yuz berdi');
    },
  });
  return (
    <section>
      <Box padding={'20px'} bgcolor={useTheme?'#eee':"#0a002a"} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Link to={'/'} className="link">
          <Box display={'flex'} sx={{ cursor: "pointer" }} gap={'10px'} alignItems={'center'} justifyContent={'center'}>
            <IoMdArrowBack color={useTheme?"#000":"#fff"}/> <Typography color={useTheme?"#000":"#fff"}>Home</Typography>
          </Box>
        </Link>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="20px"
        padding="10px"
        alignItems="flex-start"
      >
        <Box
          flex="1"
          minWidth={{ xs: "100%", md: "65%" }}
          maxHeight={"64vh"}
          overflow={"auto"}
          color={useTheme?"#000":"#fff"}
          sx={{
            "::-webkit-scrollbar": {
              width: "10px",
              background: "transparent",
            },
          }}
        >
          {Info ? (
            <Box display={"flex"}  gap={'20px'} flexDirection={'column'} alignItems={"center"} justifyContent={"center"} minHeight={"60vh"}>
              <img className="img-data" src="https://cdn-icons-png.flaticon.com/256/7466/7466140.png" alt="" />
              Mahsulot topa olmadik
            </Box>
          ) : (
            <Box  display="flex" flexDirection="column" gap="15px">
              {useLocalObject.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  border="1px solid #ddd"
                  borderRadius="8px"
                  padding="15px"
                  bgcolor={useTheme?"#f9f9f9":"#041c30"}
                  sx={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box>
                    <img
                      src={item.image}
                      alt="Product"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                      }}
                    />
                  </Box>
                  <Box flexGrow={1} paddingLeft="15px">
                    <Typography variant="body1" fontWeight="500" fontSize="14px">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" fontWeight="500" fontSize="14px" color="green">
                      {item.price} UZS
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="8px">
                    <Button
                      variant="contained"
                      sx={{
                        height: "30px",
                        width: "30px",
                        minWidth: "30px",
                        backgroundColor: "#00796b",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#004d40" },
                      }}
                      onClick={() => handleCountPlus(item.id)}
                    >
                      +
                    </Button>
                    <Typography variant="body2" fontWeight="500" fontSize="14px">
                      {item.count}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        height: "30px",
                        width: "30px",
                        minWidth: "30px",
                        backgroundColor: "#c62828",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#b71c1c" },
                      }}
                      onClick={() => handleCountMinus(item.id)}
                    >
                      -
                    </Button>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      ml: "10px",
                      color: "#c62828",
                      border: "1px solid #c62828",
                      borderRadius: "8px",
                      padding: "4px 8px",
                      textTransform: "none",
                      fontSize: "12px",
                      "&:hover": { backgroundColor: "#c62828", color: "#fff" },
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Box
          flex="1"
          minWidth={{ xs: "100%", md: "30%" }}
          border="1px solid #ddd"
          borderRadius="8px"
          padding="15px"
          bgcolor={useTheme?"#f9f9f9":"#efe6e6"}
          sx={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" fontWeight="500" marginBottom="15px">
            Buyurtma berish
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={!!errors.address || false}
              helperText={errors.address && "Manzil kiritish majburiy"}
              {...register('address', { required: true })}
              fullWidth
              label="Yetkazib berish manzili"
              variant="filled"
              margin="normal"
              size="small"
              disabled={Info}
            />
            <PatternFormat
              {...register('phone')}
              disabled={Info}
              fullWidth
              format="+998 (##) ### ####"
              mask="_"
              customInput={TextField}
              variant="filled"
              margin="normal"
              size="small"
              label="Telefon raqam"
              onValueChange={(values) => {
                setValue('phone', values.value);
              }}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="payment-type-label">To'lov turi</InputLabel>
              <Select
                disabled={useLocalObject.length === 0}
                labelId="payment-type-label"
                label="To'lov turi"
                error={!!errors.paymentType}
                {...register("paymentType", { required: "To'lov turi tanlanishi kerak!" })}
              >
                <MenuItem value="cash">Naqd pul</MenuItem>
                <MenuItem value="card">Kredit karta</MenuItem>
              </Select>
              {errors.paymentType && (
                <Typography color="error" variant="body2" mt={1}>
                  {errors.paymentType.message}
                </Typography>
              )}
            </FormControl>

            <TextField
              {...register('comment')}
              fullWidth
              label="Izoh"
              variant="filled"
              margin="normal"
              size="small"
              disabled={Info}
            />
            {useLocalObject.length > 0 && (
              <Box marginTop="20px" display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight="500">
                  Jami summa:
                </Typography>
                <Typography variant="h6" fontWeight="500" color="green">
                  {totalPrice} UZS
                </Typography>
              </Box>
            )}
            <Box marginTop="20px">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={useLocalObject.length === 0}
              >
                Buyurtmani tasdiqlash
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <OrderHistory/>
    </section>
  );
};

export default CartPage;
