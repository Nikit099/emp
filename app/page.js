'use client'
import Image from "next/image";
import './page.css'
import AlertPlants from "./ui/main/alertPlants";
import MyPlants from "./ui/main/myPlants";
import magnifyyingGlass from "@/public/main/magnifying-glass.svg"
import sadFace from "@/public/main/sad-face.svg"
import smileFace from "@/public/main/smile-face.svg"
import plus from "@/public/main/plus.svg"
import branch from "@/public/main/branch.svg"
import { usePlantsStore, useSearchStore } from "@/app/store/zustand";
import Search from "./ui/search";
import usePersist from "./store/usePersist";
import { useEffect, useState } from "react";
import Emotion from "./scripts/emotion";
import Link from "next/link";

export default function Main() {
  const plants = usePlantsStore((state) => state.plants);
  const setSearch = useSearchStore((state) => state.setSearch);
  const search = usePersist(useSearchStore, (state) => state.search);
  const [serchPlants, setSearchPlants] = useState(plants)

  function handleChange(value) {
    setSearch(value)
}
useEffect(() => {
  const results = plants.filter(elem =>
      elem.name.toLowerCase().includes(search)
  );
  setSearchPlants(results)
      
}, [search]);

// console.log();
  return (
    <>
    <div className="wrapper_main">
          <header className="header">
               <div className="search-header">
                    <Image className="magnifying-glass"
                         src={magnifyyingGlass} 
                         alt="лупа"/>
                         <Search handleChange={handleChange} placeholder={'Найти'} stl={'search_main'} />

               
               </div>
               <div className="slider-main">
                    <Image className="sad-face"
                         src={sadFace}
                         alt="sad face"/>
                    <div className="slider-background"
                         alt="slider background"></div>
                    <Image className="smile-face"
                         src={smileFace}
                         alt="smile face"/>
               </div>
               <Link href={'/choose'}>
               <button className="header__button">
                    <Image className="plus"
                         src={plus}
                         alt="plus"/>
                    <Image className="branch"
                         src={branch}
                         alt="branch"/>
               </button>
               </Link>
          </header>
          <main className="main_main">
          {
               plants.map(e => e.alert === true ).includes(true) && <AlertPlants plants={plants} serchPlants={serchPlants}/>
          }
               <MyPlants serchPlants={serchPlants}/>
          </main>
    </div>
    </>
  );
}
