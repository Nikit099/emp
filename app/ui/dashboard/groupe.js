import magnifyingGlass from '@/public/dashboard/search.svg';
import plus from '@/public/dashboard/plus.svg';
import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';

import Image from 'next/image';
import React, { useState } from 'react';

import { usePlantsStore } from '@/app/store/zustand';
import { useBlock } from '@/app/store/zustand';
import { useGroupe } from '@/app/store/zustand';
import PlantDashboard from './PlantDashboard';
import PlantDashboardPlusMenu from './plantDashboardPlusMenu';


export default function Groupe({openPlantChoose, 
                                name,
                                id, 
                                plantsId, 
                                flagBlock, 
                                changeArrowBlock, 
                                openProblems,
                                openCalendar,
                                groupeBlocks,
                                dashboardBlocks,
                                newBlockId,
                                handleDeleteGroupe,
                                dashboardGroupes,
                                }) {


    const [inputValueGroupeName, setInputValueGroupeName] = useState('');

    const handleInputChangeGroupeName = (event) => {
        setInputValueGroupeName(event.target.value);
    };                                

    /*Нэйминг^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const [flagGroupe, setFlagGroupe] = useState(true)
    function changeArrowGroupe() {
        setFlagGroupe(!flagGroupe);
    }

    /*Открытие/закрытие группы^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


    const setNameGroupe = useGroupe((state) => state.setNameGroupe);

    const handleSetNameGroupe = (nameGroupe) => {setNameGroupe(nameGroupe)}

    /*Сохранение имени^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const { plant } = usePlantsStore();
        
    /*Добавление блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const { deleteGroupe } = useGroupe();

    /*Удаление группы^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    return(
        <>
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
                                   
                                   placeholder="Поиск по растениям" />
                            <Image className="main__search_img" 
                                   src={magnifyingGlass} 
                                   alt='лупа'/>
                        </div>
                        <div className="main__add"
                             onClick={openPlantChoose}>
                            <Image className="main__plus" 
                                   src={plus} 
                                   alt="добавить растение"
                                    />
                        </div>
                            <Image className={"main__show"} 
                                   src={ flagGroupe ? arrowShowUp : arrowShowDown } 
                                   alt="развернуть группу" 
                                   onClick={changeArrowGroupe}/>
                        
                    </div>
                    <div className="main__block_right">
                        <Image className="main__delete" 
                                src={deleteDashboard} 
                                alt="удалить группу"
                                onClick={() => deleteGroupe(id)}/>
                    </div>
                </div>
                <>
                {
                    dashboardGroupes.map((e, index) => <PlantDashboard key={e.id} plantsId={e.plantsId} />)
                }
                </>
            </div>
        </>
    )
}