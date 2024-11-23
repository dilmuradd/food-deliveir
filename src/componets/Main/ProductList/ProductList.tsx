import { Box } from '@mui/material'
import './Product.css'
type ProductListProps = {
    children:React.ReactNode
}
const ProductList = ({children}:ProductListProps) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default ProductList
