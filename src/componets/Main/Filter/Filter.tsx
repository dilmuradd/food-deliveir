import { Box, FormControl, Select, MenuItem } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import useFilterStore, { usePriceStore } from "../../../store/useFilterStore";

const Filter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      try {
        const res = await axios.get('https://73ebc33f34c86959.mokky.dev/category');
        return res.data; 
      } catch (error) {
        console.log(error);
        throw error; 
      }
    },
  });

  let {useFilterFunc} = useFilterStore()
let hanleValue =(value:string)=>{
console.log(value);
useFilterFunc(value)
}

let {usePriceFunction} = usePriceStore()


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="10px"
      mt="30px"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="1220px"
        height="70px"
        border="1px solid #ddd"
        borderRadius="12px"
        p="10px"
        bgcolor="#f9f9f9"
      >
        <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            displayEmpty
            sx={{
              bgcolor: "#eee",
              borderRadius: "8px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          >
            <MenuItem onClick={()=>hanleValue("All")} value="All" >Barcha turdagilar</MenuItem> 
            {data && data.map((category: string, index: number) => (
              <MenuItem key={index} onClick={()=>hanleValue(category)} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            displayEmpty
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          >
            <MenuItem onClick={()=>usePriceFunction(10000)} value="asc">10,000 so'mdan </MenuItem>
            <MenuItem onClick={()=>usePriceFunction(25000)} value="25000">25,000 so'mdan arzon</MenuItem>
            <MenuItem onClick={()=>usePriceFunction(30000)} value="30000">eng qimmatlari</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filter;
