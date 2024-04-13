'use client'
import './page.css'
import { useEffect, useState } from "react";
import Search from "../ui/search";
import PlantCard from "../ui/choose/plantCard";
import RightSide from "../ui/choose/rightSide";
import magnifyyingGlass from "@/public/choose/magnifying-glass.svg"
import Image from "next/image";

const typePlants = [
    {id: 1,
     type: "Dracena Fr.",
     title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
    },
    {id: 2,
        type: "Melaniya So.",
        title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
    },
    {id: 3,
    type: "Notik Ne",
    title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
    },
    {id: 4,
        type: "Dodus Ne",
        title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
    },
]

export default function Choose() {
    const [search, setSearch] = useState('')
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
    return (
        
        <div className="container">
            <aside className="aside">
                <header className="aside__header">
                <Image
                    src={magnifyyingGlass}
                    className="aside__magnifying-glass"
                    alt={`magnifyying-glass`} />
                    <Search handleChange={handleChange} search={search} placeholder={"Тип растения"}/>
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