import { Box, Typography, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#021f3d', 
        color: '#ffffff', 
        padding: '20px 0', 
        textAlign: 'center', 
        marginTop: '70px', 
        width: '100%',
        
      }}
      mt={'100px'}
    >
      <Divider sx={{ borderColor: '#ffffff', marginBottom: '10px' }} /> 
      
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        LOGO
      </Typography>

      <Typography variant="body2" sx={{ fontSize: '14px' }}>
       Bizning xizmatlarimizni tekshirib chiqing va bog'laning.
      </Typography>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="body2">
          © 2024 Barcha huquqlar himoyalangan.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
