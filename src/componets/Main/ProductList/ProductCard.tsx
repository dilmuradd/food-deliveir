import './Product.css';
import { Box, Button, Grid,} from '@mui/material';
import { BsCart4 } from "react-icons/bs";
import useFilterStore, { usePriceStore, useSearchStore } from '../../../store/useFilterStore';
import useLocalStore from '../../../store/useLocalStore';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import * as React from 'react';
import Pagination1 from './Pagination/Pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}


const fetchProducts = async (page: number): Promise<{ items: Product[]; meta: any }> => {
  const response = await axios.get(`https://73ebc33f34c86959.mokky.dev/product?page=${page}&limit=${10}`);
  return response.data;
};

const ProductCard: React.FC = () => {
  const useLocalFunction = useLocalStore((state) => state.useLocalFunction);
  const useFilterValue = useFilterStore((state) => state.useFilterValue);
  const usePriceValue = usePriceStore((state) => state.usePriceValue);
  const useSearchValue = useSearchStore((state) => state.useSearchValue);
  const navigate = useNavigate();

  const handleStorage = (value: Product) => {
    useLocalFunction(value);
  };

  const [page, setPage] = React.useState(1);

  const { isLoading, error, data } = useQuery(
    ['productData', page], 
    () => fetchProducts(page), 
    { keepPreviousData: true }
  );

  const filteredData = data?.items?.filter((card: Product) => {
    const categoryCondition =
      !useFilterValue ||
      useFilterValue.toLowerCase() === "all" ||
      card.category.toLowerCase().includes(useFilterValue.toLowerCase());

    const searchCondition =
      !useSearchValue ||
      card.name.toLowerCase().includes(useSearchValue.toLowerCase());

    const priceCondition =
      !usePriceValue ||
      (usePriceValue === 10000 && card.price > 9000) ||
      (usePriceValue === 25000 && card.price <= 25000) ||
      (Number(usePriceValue) === 30000 && card.price > 24000);

    return categoryCondition && searchCondition && priceCondition;
  });

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return (
    <Box width={'100%'} p={'40px'} minHeight={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <svg height="150px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="40" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
        </circle>
        <circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="100" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
        </circle>
        <circle fill="#FF156D" stroke="#FF156D" strokeWidth="15" r="15" cx="160" cy="65">
          <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
        </circle>
      </svg>
    </Box>
  );

  if (error) return (
    <Box width={'100%'} flexDirection={'column'} p={'40px'} minHeight={'10vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <h1>404</h1>
      <h1 style={{ color: "red", fontSize: "45px" }}>Xatolik</h1>
    </Box>
  );

  if (filteredData?.length === 0) {
    return <Box width={'100%'} minHeight={'70vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <img src="https://cdn-icons-png.flaticon.com/256/7466/7466140.png" alt="no-data" />
    </Box>
  }

  const handleID = (id: number) => {
    if (navigate) {
      navigate(`/${id}`);
    }
  };

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={'100px'}>
        <Grid container spacing={3}>
          {filteredData?.map((item: Product) => (
            <Grid 
              item
              key={item.id} 
              xs={12}   
              sm={6}    
              md={4}    
              display="flex"
              justifyContent="center"
              p={'10px'}
            >
              <div className='card__box'>
                <div onClick={() => handleID(item.id)} className='card__image__box'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='flex__box'>
                  <h3 className='card__title'>{item.name}</h3>
                  <h3 className='card__price'><span>{item.price}</span> uzs</h3>
                </div>
                <h6 className='card_category'>{item.category}</h6>
                <p className='card__desc'>{item.description}</p>
                <div className='flex__box'>
                  <Button
                    variant='outlined'
                    className='card__cart'
                    onClick={() => handleStorage(item)}
                    sx={{
                      color: "rgba(147, 6, 6, 0.807)",
                      border: "1px solid rgba(147, 6, 6, 0.807)",
                      position: "absolute",
                      bottom: "20px",
                      left: "15px",
                      width: "130px",
                      gap: "10px"
                    }}
                  >
                    Savatga <BsCart4 />
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    <Pagination1 handlePageChange={handlePageChange} page={page}/>
    </Box>
  );
};

export default ProductCard;
