import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function LineNorms({name, min, max}) {
    const [norm, setNorm] = useState('')
    function handleChange(elem) {
        setNorm(elem)
    }
    return (

        <div className="line">
        <div className="line__title">{name}</div>
        <div className="line__parameter">{
            max ? (min + ' min' + ' - ' + max + ' max') : min + ' min'
        }</div>
        <div className="line__reset">
            <Image className="line__reset_img"
                   src={rotate}
                   alt='Отменить'></Image>
        </div>
        <div className="line__input_block">
            <form className="line__form">
                {/* <Image className="line__pen"
                       src={pen}
                       alt='Редактировать'></Image> */}
                <input value={norm} onChange={(e) => handleChange(e.target.value)} className="line__input"  type="number"
                    placeholder="Введите значение от"></input>
                <input  className="line__input"  type="number"
                    placeholder="Введите значение до"></input>
            </form>
        </div>
    </div>
    ) 
    }