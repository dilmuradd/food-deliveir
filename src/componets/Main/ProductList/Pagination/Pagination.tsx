import { Box, Pagination, Stack } from '@mui/material';
import useThemeStore from '../../../../store/useThemeStore';

interface PaginationProps {
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
}

const Pagination1 = ({ handlePageChange, page }: PaginationProps) => {
const {useTheme} = useThemeStore()


  return (
    <Box color={"#fff"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={2}>
        <Pagination
          count={3}
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: !useTheme ? '#fff' : '#000',
              borderColor: !useTheme ? '#fff' : '#000',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#fff',
              color: '#000000',
            },
          }}
        />
      </Stack>
    </Box>
  );
}

export default Pagination1;
