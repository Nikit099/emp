
import Image from 'next/image';

import MyPlantsPlusMenu from '@/app/ui/dashboard/myPlantsPlusMenu';



import deleteDashboard from '@/public/dashboard/delete.svg';
import magnifyingGlass from '@/public/dashboard/search.svg';

import { usePlantsStore, useSearchStore } from "@/app/store/zustand";
import usePersist from "@/app/store/usePersist";
import { useEffect, useState } from "react";


export default function PlantChoose ({closePlantChoose,
                                        addBlock,
                                        currentGroupeId,
                                        groupeId,
                                        }) {
    
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
    
    return (

        
    <>
    <div className="plantchoose__container">
        <div className="plantchoose__block">
            <div className="plantchoose__sides">
                <div className="plantchoose__block_left">
                    <span className="plantchoose__title" >Выбрать растение</span>
                    <div className="plantchoose__search">
                        <input className="plantchoose__search_input"
                               type="search"
                               placeholder="Поиск по растениям" />
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
            <MyPlantsPlusMenu serchPlants={serchPlants}
                                closePlantChoose={closePlantChoose}
                                addBlock={addBlock}
                                groupeId={groupeId}
                                currentGroupeId={currentGroupeId}/>
        </div>
    </div>
    </>
    );
}