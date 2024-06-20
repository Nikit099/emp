'use client'
import './page.css'
import { useEffect, useState } from "react";
import Search from "../ui/search";
import PlantCard from "../ui/choose/plantCard";
import RightSide from "../ui/choose/rightSide";
import magnifyyingGlass from "@/public/choose/magnifying-glass.svg"
import Image from "next/image";
import { usePlantsStore } from '../store/zustand';
import usePersist from '../store/usePersist';
import { useSearchStore } from "../store/zustand";

export default function Choose() {
    const search = usePersist(useSearchStore, (state) => state.search);
    const setSearch = useSearchStore((state) => state.setSearch);
    const { typePlants, incPlant } = usePlantsStore();
    const [searchTypePlants, setSearchTypePlants] = useState(typePlants);
    const [choosedPlant, setChoosedPlant] = useState('');
    const [choosedId, setChoosedId] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [plantName, setPlantName] = useState('');

    function handleChange(value) {
        setSearch(value);
    }

    useEffect(() => {
        const results = typePlants.filter(elem =>
            elem.type.toLowerCase().includes(search)
        );
        setSearchTypePlants(results);
    }, [search]);

    function chooseClick(id) {
        const plant = searchTypePlants.find(item => item.id === id);
        setChoosedPlant(plant);
        setChoosedId(id);
    }

    function createPlant(plant) {
        const newPlant = {
            id: Date.now(),
            name: plantName,
            typeId: plant.id,
            recommendate: `Пока, у ${plantName} всё хорошо`,
            alert: false,
            img: plant.imgBigEmo
        }
        incPlant(newPlant);
    }

    const handleIsVisible = () => {
        setIsVisible(!isVisible);
    };

    const handlePlantNameChange = (newPlantName) => {
        setPlantName(newPlantName);
    };

    return (
        <div className="container">
            <aside className={`aside ${isVisible ? '' : 'aside--hidden'}`}>
                <header className="aside__header">
                    <Image
                        src={magnifyyingGlass}
                        className="aside__magnifying-glass"
                        alt="magnifying-glass"
                    />
                    <Search stl={'search'} handleChange={handleChange} placeholder={"Тип растения"} />
                </header>
                <div className="aside__plant-cards">
                    {
                        searchTypePlants.map(e =>
                            <PlantCard
                                chooseClick={chooseClick}
                                img={e.img}
                                choosedId={choosedId}
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                type={e.type}
                                handleIsVisible={handleIsVisible}
                            />
                        )
                    }
                </div>
            </aside>
            <RightSide
                typeId={choosedId}
                createPlant={createPlant}
                choosedPlant={choosedPlant}
                handleIsVisible={handleIsVisible}
                isVisible={isVisible}
                onPlantNameChange={handlePlantNameChange}
            />
        </div>
    )
}
