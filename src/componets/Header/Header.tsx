import { Box } from "@mui/material";
import useThemeStore from "../../store/useThemeStore";
import './header.css';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const { useTheme } = useThemeStore();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="10px"
      px={'20px'}
      borderRadius={'0 0 10px 10px'}
      position={'sticky'}
      top={0}
      zIndex={1000}
      bgcolor={useTheme ? '#f1f1f1' : '#021c34'}
      width={'100%'}
      boxShadow={4}
    >
      {children}
    </Box>
  );
}

export default Header;
