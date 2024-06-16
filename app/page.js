'use client'
import Image from "next/image";
import './page.css'
import AlertPlants from "./ui/main/alertPlants";
import MyPlants from "./ui/main/myPlants";

import { usePlantsStore, useSearchStore } from "@/app/store/zustand";
import usePersist from "./store/usePersist";
import { useEffect, useState } from "react";
import RealHeader from "./ui/realHeader";
import { usePathname } from "next/navigation";

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


const pathname = usePathname()

  return (
    <div className="contMain">
    <RealHeader handleChange={handleChange}  main={true}/>
    <div className="wrapper">

          <div className="wrapper_main">
               
               <main className="main_main">
               {
                    plants.map(e => e.alert === true ).includes(true) && <AlertPlants plants={plants} serchPlants={serchPlants}/>
               }
                    <MyPlants serchPlants={serchPlants}/>
               </main>
          </div>
    </div>
    </div>
  );
}
