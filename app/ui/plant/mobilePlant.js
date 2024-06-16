import Image from 'next/image';

import plantImg from '@/public/plant/plant.png';

import arrowBack from '@/public/plant/arrow-back.svg';
import graph from '@/public/plant/graph.png';
import questionCircle from '@/public/plant/question-circle.svg'
import rotate from '@/public/plant/rotate.svg';
import checkCircle from '@/public/plant/check-circle.svg';
import pen from '@/public/plant/pen.svg';
import Link from 'next/link';
import Seeds from './mobilePlantUi/seeds';
import Chart from './mobilePlantUi/chart';
import SetNorms from './mobilePlantUi/setNorms';
import HeadPlant from './mobilePlantUi/headPlant';
import { usePlantsStore } from '@/app/store/zustand';
import { useEffect, useLayoutEffect, useState } from 'react';
export default function MobilePlant({id, }) {
const {changeName, plants} = usePlantsStore()
const [namePlant, setNamePlant] = useState('')
const [plant, setPlant] = useState()
useLayoutEffect(() => {
    const getPlant = plants.filter(e => e.id == id )
    setPlant(getPlant[0])
  }, []);

  function submitNamePlant(e) {
    e.preventDefault()
    if(namePlant){
        setPlant({...plant, name: namePlant})
        changeName(namePlant, id)
        setNamePlant('')
    }
   
    
}
    return (
<div className="wrapper_mobile_plant">
<div className='wrapper_mob_green'></div>
                
                <Link href={'/'}>
                        
                <div className="mobile__back">
                    <Image className="mobile__back_img"
                           src={arrowBack}
                           alt='Назад'></Image>
                </div>
                        
                        </Link>
                {
                    plant && <>
                    <div className="header_plant__title">
                            <span>{plant.name}</span>
                        </div>
                <div className="top_mobile_plant">
                    <div className="top_mobile_plant__left">
                        <Image className="norms_plant__plant"
                                   src={plant.img}
                                   alt='Растение'
                                   width={500}
                                   height={600}></Image>
                    </div>
                    <div className="top_mobile_plant__right">
                      <HeadPlant id={id} plant={plant}/>
                    </div>
                </div></>
                }
                <div className="bottom_mobile_plant">
                    <div className="footer_plant__wrapper">
                        
                        
                       <SetNorms id={id}/>
                       
                        <div className="mobile__graph">
                            <div className="footer_plant__left">
                                
                                <Chart  id={id}/>
                            </div>
                        </div>
                        <div className="mobile__buttons">
                            <Seeds namePlant={namePlant} submitNamePlant={submitNamePlant} setNamePlant={setNamePlant}  id={id}/>
                        </div>
                    </div>
                </div>
            </div>
    
    ) 
    }