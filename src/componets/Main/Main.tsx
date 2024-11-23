import { Box } from "@mui/material"
type MainProps = {
  children: React.ReactNode
}
const Main = ({children}:MainProps) => {

  return (
 <Box>
  {children}
 </Box>
  )
}

export default Main
