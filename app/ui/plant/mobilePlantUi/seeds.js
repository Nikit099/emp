import Image from 'next/image';


import checkCircle from '@/public/plant/check-circle.svg';
import pen from '@/public/plant/pen.svg';
import Link from 'next/link';
import { usePlantsStore } from '@/app/store/zustand';
export default function Seeds({namePlant, submitNamePlant, setNamePlant, id}) {
    const {deletPlant} = usePlantsStore()
    return (

        <div className="footer_plant__right_bottom">
            <div className="footer_plant__right_bottom_input_block">
                <form onSubmit={(e) => submitNamePlant(e)} className="footer_plant__right_bottom_form">
                    <Image className="footer_plant__right_bottom_pen"
                        src={pen}
                        alt='Редактировать'></Image>
                    <input onChange={(e) => setNamePlant(e.target.value)} value={namePlant} className="footer_plant__right_bottom_input"
                        placeholder="Введите новое имя питомца"></input>
                    <Image className="footer_plant__right_check"
                        src={checkCircle}
                        alt='Подтверждение'></Image>
                </form>
            </div>
            <div className="footer_plant__right_bottom_plant_type">
            <Link href={`/choose/${id}`}> <button>Смена вида растения</button> </Link>
            </div>
            <div onClick={() => deletPlant(id)} className="footer_plant__right_bottom_delete">
            <Link href={`/`}>
                <button>Удалить растение</button>   
                </Link>
            </div>
            
        </div>
    ) 
    }