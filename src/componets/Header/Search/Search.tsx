import { Box, Button, InputBase, IconButton } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSearchStore } from "../../../store/useFilterStore";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useThemeStore from "../../../store/useThemeStore";

const Search: React.FC = () => {
  const useSearchFunction = useSearchStore((state) => state.useSearchFunction);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    useSearchFunction(e.target.value);
  };

  const theme = useThemeStore((state) => state.useTheme);
  const {useThemeFunc} = useThemeStore();

  return (
    <Box display="flex" alignItems="center" gap="20px">
      {/* Search Box */}
      <Box
        borderRadius="5px"
        display="flex"
        alignItems="center"
        sx={{
          maxWidth: "350px",
          width: "100%",
          height: "35px",
          border: `1px solid ${theme ? "#003366" : "#ccc"}`,
          padding: "0 10px",
          backgroundColor: theme ? "#fff" : "#fff",
        }}
      >
      <InputBase
  onInput={handleInput}
  placeholder="Search..."
  sx={{
    flex: 1,
    border: "none",
    background: "transparent",
    color: theme ? "#000" : "#000",
    fontSize: "16px",
    padding: "5px",
    outline: "none",
    "&::placeholder": {
      color: theme ? "#000" : "#000",
      fontStyle: "italic",
    },
    "@media (max-width: 600px)": {
      fontSize: "14px", // Kichik ekranlar uchun shriftni kichraytirish
    },
  }}
/>
<IconButton
  sx={{
    padding: "5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme ? "#002244" : "#f0f0f0", // Hoverda fon rangi
    },
  }}
>
  <CiSearch style={{ color: theme ? "#fff" : "#000", fontSize: "20px" }} />
</IconButton>

      </Box>

      {/* Cart Button */}
      <Box>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <Button>
           
            <FaCartShopping />
          </Button>
        </Link>
      </Box>

      <Box>
        {theme ? (
          <MdOutlineDarkMode
            style={{ cursor: "pointer", color: "#000", fontSize: "20px" }}
            onClick={() => useThemeFunc(false)} // False holatni o‘tkazish
          />
        ) : (
          <CiLight
            style={{ cursor: "pointer", color: "#fff", fontSize: "20px" }}
            onClick={() => useThemeFunc(true)} // True holatni o‘tkazish
          />
        )}
      </Box>
    </Box>
  );
};

export default Search;
