import Image from 'next/image';


import checkCircle from '@/public/plant/check-circle.svg';
import pen from '@/public/plant/pen.svg';
export default function Seeds() {
    
    return (

        <div className="footer_plant__right_bottom">
            <div className="footer_plant__right_bottom_input_block">
                <form className="footer_plant__right_bottom_form">
                    <Image className="footer_plant__right_bottom_pen"
                        src={pen}
                        alt='Редактировать'></Image>
                    <input className="footer_plant__right_bottom_input"
                        placeholder="Введите новое имя питомца"></input>
                    <Image className="footer_plant__right_check"
                        src={checkCircle}
                        alt='Подтверждение'></Image>
                </form>
            </div>
            <div className="footer_plant__right_bottom_plant_type">
            <Link href={'/choose'}> <button>Смена вида растения</button> </Link>
            </div>
            <div className="footer_plant__right_bottom_delete">
                <button>Удалить растение</button>   
            </div>
            <div className="footer_plant__right_bottom_go_out">
                <button>Выйти из аккаунта</button>
            </div>
        </div>
    ) 
    }