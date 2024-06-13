
import Image from 'next/image';

import React, { useState } from 'react';

import magnifyingGlass from '../../../public/dashboard/search.svg';
import AlmanachPlant from './almanachPlant';
import { usePlantsStore } from '@/app/store/zustand';

export default function AlmanachChoose ({handleAlmanachChoose}) {   

const { typePlants } = usePlantsStore();
const [searchQuery, setSearchQuery] = useState('');

const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
};

const filteredPlants = typePlants.filter((plant) =>
    plant.type.toLowerCase().includes(searchQuery.toLowerCase())
);

 /*Поиск по растениям^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


    return (
        <>
            <aside className="almanach-choose" >
                <div className='almanach-choose__container'>
                    <div className="almanach-choose__search">
                        <input className="almanach-choose__search_input"
                                type="text"
                                placeholder="Поиск по растениям"
                                value={searchQuery}
                                onChange={handleSearchChange}
                        />
                        <Image className="almanach-choose__search_img" 
                                src={magnifyingGlass} 
                                alt='лупа'/>
                    </div>
                    <div className='plants'>
                        {filteredPlants.map((e, index) => <AlmanachPlant key={`${e.id}_${index}`}
                                                                     id={e.id}
                                                                     img={e.img}
                                                                     width={e.width}
                                                                     height={e.height}
                                                                     name={e.type}
                                                                     desc={e.title}
                                                                     handleAlmanachChoose={handleAlmanachChoose}/>)}
                    </div>
                </div>
            </aside>
        </>
    )
}