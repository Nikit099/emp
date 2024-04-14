import {  useSearchStore } from "../store/zustand";

export default function Search({ stl, handleChange, placeholder}) {
    const search = useSearchStore((state) => state.search);

    return (

    <input
     value={search}
    onChange={(e) => handleChange(e.target.value) }
    type="search" 
    className={stl}
    placeholder={placeholder}/>

    ) 
    }