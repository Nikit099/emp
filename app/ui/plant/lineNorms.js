import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import Image from 'next/image';
export default function LineNorms() {

    return (

        <div className="line">
        <div className="line__title">Температура воздуха</div>
        <div className="line__parameter">10 - 30 C°</div>
        <div className="line__reset">
            <Image className="line__reset_img"
                   src={rotate}
                   alt='Отменить'></Image>
        </div>
        <div className="line__input_block">
            <form className="line__form">
                <Image className="line__pen"
                       src={pen}
                       alt='Редактировать'></Image>
                <input className="line__input"
                    placeholder="Введите значение от - до"></input>
            </form>
        </div>
    </div>
    ) 
    }