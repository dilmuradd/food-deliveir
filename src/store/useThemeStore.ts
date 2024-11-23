import {create} from 'zustand'



interface ThemeFunc {
    useTheme:boolean,
    useThemeFunc: (item:boolean)=>void
}

let useThemeStore = create<ThemeFunc>((set)=>({
    useTheme:true,
    useThemeFunc:(item)=>set({useTheme:item})
}))
export default useThemeStore