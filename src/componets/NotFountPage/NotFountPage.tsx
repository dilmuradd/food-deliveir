import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#003366', 
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '120px', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Sahifa topilmadi
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: '10px 20px', fontSize: '16px' }}
        onClick={() => navigate('/')}
      >
        Bosh sahifaga qaytish
      </Button>
    </Box>
  );
};

export default NotFound;
