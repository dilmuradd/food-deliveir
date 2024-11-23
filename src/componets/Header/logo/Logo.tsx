import { Typography } from "@mui/material"
import useThemeStore from "../../../store/useThemeStore"

const Logo = () => {
    let {useTheme} = useThemeStore()
  return (
   <Typography color={useTheme?"#000":"#fff"} mr={'10px'}>
    LOGO
   </Typography>
  )
}

export default Logo
