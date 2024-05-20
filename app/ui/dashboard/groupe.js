import magnifyingGlass from '@/public/dashboard/search.svg';
import plus from '@/public/dashboard/plus.svg';
import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { usePlantsStore } from '@/app/store/zustand';
import { useBlock } from '@/app/store/zustand';
import { useGroupe } from '@/app/store/zustand';
import PlantDashboard from './PlantDashboard';
import PlantDashboardPlusMenu from './plantDashboardPlusMenu';
import PlantChoose from './choose';


export default function Groupe({groupeId, 
                                plantsId, 
                                flagBlock, 
                                changeArrowBlock, 
                                openProblems,
                                openCalendar,
                                getPlantsExceptInDashboard,
                                groupeIndex,
                                }) {

                                    
                                    
    const {setDashboardGroupes, dashboardGroupes } = useGroupe();
    
    const [inputValueGroupeName, setInputValueGroupeName] = useState('');
    
    const handleInputChangeGroupeName = (event) => {
        setInputValueGroupeName(event.target.value);
    };                                
    
    /*Нэйминг^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].id !== arr2[i].id || arr1[i].name !== arr2[i].name) {
                return false;
            }
        }
        
        return true;
    }
    

    useEffect(() => {
        // Update dashboardGroupes state with the new input value
        const updatedDashboardGroupes = dashboardGroupes.map((groupe) => {
            if (groupe.id === groupeId) {
                return {
                    ...groupe,
                    name: inputValueGroupeName,
                };
            }
            return groupe;
        });
        
        // Check if the dashboardGroupes actually changed before updating
        if (!areArraysEqual(updatedDashboardGroupes, dashboardGroupes)) {
            setDashboardGroupes(updatedDashboardGroupes); // Use setDashboardGroupes to update the state
        }
    }, [inputValueGroupeName, groupeId, dashboardGroupes, setDashboardGroupes]);
    
    
    /*Сохранение имени^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const [flagGroupe, setFlagGroupe] = useState(true)
    function changeArrowGroupe() {
        setFlagGroupe(!flagGroupe);
    }

    /*Открытие/закрытие группы^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/



    //const currentGroupesIds = dashboardGroupes.map(e => e.id);
    const [currentGroupeId, setCurrentGroupeId] = useState();
    const [isVisiblePlantChoose, setIsVisiblePlantChoose] = useState(false);

    const openPlantChoose = (groupeId) => {
        setIsVisiblePlantChoose(true);
        setCurrentGroupeId(groupeId)
    };

    const closePlantChoose = () => {
        setIsVisiblePlantChoose(false);
    };
        
    /*Добавление блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const { deleteGroupe } = useGroupe();

    /*Удаление группы^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    const {plants} = usePlantsStore();
    const [searchQuery, setSearchQuery] = useState('');
    // Фильтрация растений по имени в соответствии с поисковым запросом
    const filtredPlants = plants.filter(plant =>
        plantsId.includes(plant.id) && // Фильтрация по plantsId
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) // Фильтрация по имени
    );
    // Извлечение только идентификаторов отфильтрованных растений
    const filtredPlantsById = filtredPlants.map(plant => plant.id);
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    

    /*Поиск по растениям^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    return(
        <>
        {isVisiblePlantChoose && <PlantChoose   closePlantChoose={closePlantChoose} 
                                                groupeId={groupeId}
                                                getPlantsExceptInDashboard={getPlantsExceptInDashboard}
                                                groupeIndex={groupeIndex}
                                                
                                                 />
                
        }
            <div className="main__block">
                <div className="main__sides">
                    <div className="main__block_left">
                        <input
                            className="main__title"
                            type="text"
                            value={inputValueGroupeName}
                            onChange={handleInputChangeGroupeName}
                            placeholder='Ваше имя группы'
                            maxLength={16}
                            
                        />
                        <div className="main__search">
                            <input className="main__search_input"
                                   type="text"
                                   value={searchQuery}
                                   onChange={handleSearchInputChange}
                                   placeholder="Поиск по растениям"
                                    />
                            <Image className="main__search_img" 
                                   src={magnifyingGlass} 
                                   alt='лупа'/>
                        </div>
                        <div className="main__add"
                             onClick={() => openPlantChoose(groupeId)}>
                            <Image className="main__plus" 
                                   src={plus} 
                                   alt="добавить растение"
                                    />
                        </div>
                        <div className='main__show_background'
                             onClick={changeArrowGroupe}>
                            <svg className={`main__show ${flagGroupe ? 'rotated' : ''}`} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.1304 12.3787L27.1305 12.3785C27.8302 11.6788 27.8302 10.5444 27.1305 9.84472C26.4308 9.14503 25.2964 9.14503 24.5967 9.84472L24.9503 10.1983L24.5967 9.84472L16.1078 18.3336C15.7987 18.6428 15.2974 18.6428 14.9882 18.3336L6.40253 9.74791C5.70284 9.04822 4.56842 9.04822 3.86873 9.74791C3.16905 10.4476 3.16905 11.582 3.86873 12.2817L12.4512 20.8641C14.1592 22.5722 16.9284 22.5728 18.6372 20.8653L27.1304 12.3787Z" fill="#498553" stroke="#498553"/>
                            </svg>
                        </div>
                    </div>
                    <div className="main__block_right">
                        <div className='main__delete_background'
                            onClick={() => deleteGroupe(groupeId)}>
                            <Image className="main__delete" 
                                    src={deleteDashboard} 
                                    alt="удалить группу"/>
                        </div>
                    </div>
                </div>
                <div className='main__block_under_sides'>
                    <input
                        className="main__title"
                        type="text"
                        value={inputValueGroupeName}
                        onChange={handleInputChangeGroupeName}
                        placeholder='Ваше имя группы'
                        maxLength={16}
                    />
                    <div className="main__add"
                         onClick={() => openPlantChoose(groupeId)}>
                        <Image className="main__plus" 
                                src={plus} 
                                alt="добавить растение"
                        />
                    </div>
                    <div className='main__show_background'>
                        <Image className={"main__show"} 
                                src={ flagGroupe ? arrowShowUp : arrowShowDown } 
                                alt="развернуть группу" 
                                onClick={changeArrowGroupe}/>
                    </div>

                </div>
                <>
                {
                    filtredPlantsById.map((e, index) => <PlantDashboard  key={`${e.id}_${index}`} 
                                                                plantId={e}
                                                                plantsIdIndex={index}
                                                                flagGroupe={flagGroupe} 
                                                                flagBlock={flagBlock} 
                                                                changeArrowBlock={changeArrowBlock} 
                                                                openProblems={openProblems}
                                                                openCalendar={openCalendar}
                                                                groupeId={groupeId} />)
                }
                </>
            </div>
        </>
    )
}           