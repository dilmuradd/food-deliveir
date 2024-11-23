import { create } from "zustand";

interface FileStore {
    useFilterValue: string|null,
    useFilterFunc:(value: string)=> void
}
let useFilterStore = create<FileStore>((set)=>({
useFilterValue:null,
useFilterFunc:(value:string)=>set(()=>{
    let a = {useFilterValue:value}
    console.log(a.useFilterValue);
    
    return a
})

}))
export default useFilterStore


interface PriceStore {
    usePriceValue: null | number,
    usePriceFunction:(value:number)=>void
}

export let usePriceStore = create<PriceStore>((set)=>({
    usePriceValue:null,
    usePriceFunction:(value:number)=>set(()=>{
        let b = {usePriceValue:value}
        console.log(b);
        return b
        
    })
}))


interface SearchStore {
    useSearchValue:string | null,
    useSearchFunction: (value:string)=>void
}

 let useSearchStore = create<SearchStore>((set)=>({
    useSearchValue:null,
    useSearchFunction:(value:string)=>set(()=>{
        let c = {useSearchValue:value}
        console.log(c.useSearchValue);
        return c
        
    })

}))
export {useSearchStore}