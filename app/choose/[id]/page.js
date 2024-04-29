'use client'
import '../page.css'
import { useEffect, useState } from "react";
import Search from "../../ui/search";
import PlantCard from "../../ui/choose/changeType/plantCard";
import RightSide from "../../ui/choose/changeType/rightSide";
import magnifyyingGlass from "@/public/choose/magnifying-glass.svg"
import Image from "next/image";
import { useCountStore, usePlantsStore } from '../../store/zustand';
import usePersist from '../../store/usePersist';
import {  useSearchStore } from "../../store/zustand";
import { usePathname } from 'next/navigation';

export default function Choose() {
    const search = usePersist(useSearchStore, (state) => state.search);

    const pathname = usePathname()
    
    const setSearch = useSearchStore((state) => state.setSearch);
    const {  typePlants, incPlant, plants } = usePlantsStore();
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

     
      function getUrlID(){
        let plantId = ''
        for (let i = 1; i < pathname.length; i++ ){

            if(Number(pathname[i])){

                plantId = plantId + pathname[i]
            }
            
        }
      return  plantId 
    }
    // console.log(getUrlID());
const id = getUrlID()
    
   
    const [filterPlant, setFilterPlant] = useState()
    useEffect(() => {
        setFilterPlant(plants.filter(e => e.id == id)[0])
    }, [])


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
            <RightSide  plantId={id}  choosedId={choosedId} choosedPlant={choosedPlant} />
        </div>
    ) 
    }