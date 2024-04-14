'use client'
import './page.css'
import { useEffect, useState } from "react";
import Search from "../ui/search";
import PlantCard from "../ui/choose/plantCard";
import RightSide from "../ui/choose/rightSide";
import magnifyyingGlass from "@/public/choose/magnifying-glass.svg"
import Image from "next/image";
import { useCountStore, usePlantsStore } from '../store/zustand';
import usePersist from '../store/usePersist';
import {  useSearchStore } from "../store/zustand";


export default function Choose() {
    const search = usePersist(useSearchStore, (state) => state.search);
    const setSearch = useSearchStore((state) => state.setSearch);
    const typePlants = usePlantsStore((state) => state.typePlants);

    const [serchTypePlants, setSearchTypePlants] = useState(typePlants)
    const [choosedPlant, setChoosedPlant] = useState('')
    const [choosedId, setChoosedId] = useState(null)
    function handleChange(value) {
        setSearch(value)
    }
    useEffect(() => {
        const results = typePlants.filter(elem =>
            elem.type.toLowerCase().includes(search)
        );
        setSearchTypePlants(results)
            
      }, [search]);
      function chooseClick(id) {
        const plant = serchTypePlants.find(item => item.id === id)
        setChoosedPlant(plant)
        setChoosedId(id)
      }


      const {  inc, dec } = useCountStore();
      const count = usePersist(useCountStore, (state) => state.count);
    return (
        
        <div className="container">
            <aside className="aside">
                <header className="aside__header">
                <Image
                    src={magnifyyingGlass}
                    className="aside__magnifying-glass"
                    alt={`magnifyying-glass`} />
                    <Search stl={'search'} handleChange={handleChange}  placeholder={"Тип растения"}/>
                    {/* <div className='mom'>{count}</div>
                    <button onClick={inc}> Плюсик </button>
                    <button onClick={dec}> Минусик </button> */}
                </header>
                <div className="aside__plant-carts">
                    {
                        
                        serchTypePlants.map(e => 
                        <PlantCard chooseClick={chooseClick} choosedId={choosedId} key={e.id} id={e.id} title={e.title} type={e.type} />
                        )

                    }
                    

                </div>
            </aside>
            <RightSide choosedPlant={choosedPlant} />
        </div>
    ) 
    }