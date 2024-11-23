import { Box } from '@mui/material'
type ExampleProps = {
    children: React.ReactNode
}
const Layout = ({children}:ExampleProps) => {
  return (
    <Box maxWidth={'1120px'} m={'auto'}>
      {children}
    </Box>
  )
}

export default Layout
