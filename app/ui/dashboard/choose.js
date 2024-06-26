
import Image from 'next/image';

import MyPlantsPlusMenu from '@/app/ui/dashboard/myPlantsPlusMenu';



import deleteDashboard from '@/public/dashboard/delete.svg';
import magnifyingGlass from '@/public/dashboard/search.svg';

import { usePlantsStore, useSearchStore } from "@/app/store/zustand";
import usePersist from "@/app/store/usePersist";
import { useEffect, useState } from "react";


export default function PlantChoose ({closePlantChoose,
                                        addBlock,
                                        groupeId,
                                        groupeIndex,}) {
    
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
    //

    const [searchQuery, setSearchQuery] = useState(''); // Состояние для хранения поискового запроса


    // Обработчик изменения поискового запроса
    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    //поиск по растениям ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    return (

        
    <>
    <div className='plantchoose'>

        <div className='plantchoose__blur'>
            <div className="plantchoose__container">
                <div className="plantchoose__block">
                    <div className="plantchoose__sides">
                        <div className="plantchoose__block_left">
                            <span className="plantchoose__title" >Выбрать растение</span>
                            <div className="plantchoose__search">
                                <input className="plantchoose__search_input"
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                    placeholder="Поиск по растениям"
                                        />
                                <Image className="plantchoose__search_img" src={magnifyingGlass} alt='лупа'/>
                            </div>
                        </div>
                        <div className="plantchoose__block_right">
                            <Image className="plantchoose__delete" 
                                src={deleteDashboard} 
                                alt="удалить группу"
                                onClick={closePlantChoose}/>
                        </div>
                    </div>
                    <div className='plantchoose__under_sides'>
                        <input className="plantchoose__search_input"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="Поиск по растениям"
                                />
                        <Image className="plantchoose__search_img" src={magnifyingGlass} alt='лупа'/>
                    </div>
                    <MyPlantsPlusMenu serchPlants={serchPlants}
                                        closePlantChoose={closePlantChoose}
                                        addBlock={addBlock}
                                        groupeId={groupeId}                    
                                        groupeIndex={groupeIndex}
                                        searchQuery={searchQuery}/>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}