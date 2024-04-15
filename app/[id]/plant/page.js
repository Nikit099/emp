import Image from "next/image";
import './page.css'

import arrowLeftCircle from '@/public/plant/arrow-left-circle.svg';
import checkCircle from '@/public/plant/check-circle.svg';
import graph from '@/public/plant/graph.png';
import pen from '@/public/plant/pen.svg';
import plant from '@/public/plant/plant.png';
import questionCircle from '@/public/plant/question-circle.svg'
import rotate from '@/public/plant/rotate.svg';

export default function Plant() {

    return (
    <>
        <div className="plant">
            <div className="wrapper_plant">
                <div className="header_plant">
                    <div className="header_plant__container">
                        <div className="header_plant__left">
                            <div className="header_plant__title">
                                <span className="header_plant__title_span">Ольга</span>
                            </div>
                            <div className="header_plant__parameters">
                                <div className="parameter">
                                    <span className="parameter__title">Температура воздуха</span>
                                    <span className="parameter__parameter">25 C</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Влажность воздуха</span>
                                    <span className="parameter__parameter">64%</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Влажность почвы</span>
                                    <span className="parameter__parameter">25%</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Освещение</span>
                                    <span className="parameter__parameter">257 Lux</span>
                                </div>
                            </div>
                        </div>
                        <div className="header_plant__right">
                            <Image className="header_plant__arrow_block"
                                   src={arrowLeftCircle}
                                   alt='Назад'></Image>
                        </div>
                    </div>
                </div>
                <div className="norms_plant">
                    <div className="norms_plant__container">
                        <div className="norms_plant__left">
                            <div className="norms_plant___title_block">
                                <span className="norms_plant__title">Нормы</span>
                                <Image className="norms_plant__title_img"
                                       src={questionCircle}
                                       alt='Дополнительная информация'></Image>
                            </div>
                            <div className="norms_plant__main_block">
                                <div className="line">
                                    <div className="line_title">Температура воздуха</div>
                                    <div className="line_parameter">10 _ 30 C°</div>
                                    <div className="line_reset">
                                        <Image className="line_reset_img"
                                               src={rotate}
                                               alt='Отменить'></Image>
                                    </div>
                                    <div className="line_input">
                                        <form className="line_form">
                                            <Image className="line_pen"
                                                   src={pen}
                                                   alt='Редактировать'></Image>
                                            <input className="line_input"
                                                placeholder="Введите значение от _ до"></input>
                                        </form>
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="line_title">Влажность воздуха</div>
                                    <div className="line_parameter">10 _ 30 %</div>
                                    <div className="line_reset">
                                        <Image className="line_reset_img"
                                               src={rotate}
                                               alt='Отменить'></Image>
                                    </div>
                                    <div className="line_input">
                                        <form className="line_form">
                                            <Image className="line_pen"
                                                   src={pen}
                                                   alt='Редактировать'></Image>
                                            <input className="line_input"
                                                placeholder="Введите значение от _ до"></input>
                                        </form>
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="line_title">Влажность почвы</div>
                                    <div className="line_parameter">10 _ 30 %</div>
                                    <div className="line_reset">
                                        <Image className="line_reset_img"
                                                src={rotate}
                                                alt='Отменить'></Image>
                                    </div>
                                    <div className="line_input">
                                        <form className="line_form">
                                            <Image className="line_pen"
                                                   src={pen}
                                                   alt='Редактировать'></Image>
                                            <input className="line_input"
                                                placeholder="Введите значение от _ до"></input>
                                        </form>
                                    </div>
                                </div>
                                <div className="line">
                                    <div className="line_title">Освещение</div>
                                    <div className="line_parameter">10 _ 30 Lux</div>
                                    <div className="line_reset">
                                        <Image className="line_reset_img"
                                               src={rotate}
                                               alt='Отменить'></Image>
                                    </div>
                                    <div className="line_input">
                                        <form className="line_form">
                                            <Image className="line_pen"
                                                   src={pen}
                                                   alt='Редактировать'></Image>
                                            <input className="line_input"
                                                placeholder="Введите значение от _ до"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="norms_plant__right">
                            <div className="norms_plant__plant"></div>
                        </div>
                    </div>
                </div>
                <div className="footer_plant">
                    <div className="footer_plant__container">
                        <div className="footer_plant__left">
                            <div className="footer_plant__left_title_block">
                                <span className="footer_plant__left_title" >История ухода</span>
                                <button className="footer_plant__left_button">Подробнее</button>
                            </div>
                            <div className="footer_plant__left_radio_block">
                                <form className="footer_plant__left_radio_form">
                                    <label>
                                        <input id='radio_1' className="day" name="radio" type="radio" />
                                        <div className="radio_form__left_radio radio_1">
                                            Температура воздуха
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio_2' className="week" name="radio" type="radio"/>
                                        <div className="radio_form__left_radio radio_2">
                                            Влажность почвы
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio_3' className="month" name="radio" type="radio"/>
                                        <div className="radio_form__left_radio radio_3">
                                            Влажность воздуха
                                        </div> 
                                    </label>
                                    <label>
                                        <input id='radio_4' className="month" name="radio" type="radio"/>
                                        <div className="radio_form__left_radio radio_4">
                                            Освещение
                                        </div> 
                                    </label>
                                </form>
                            </div>
                            <div className="footer_plant__graph_block">
                                <div className="footer_plant__graph"></div>
                            </div>
                        </div>
                        <div className="footer_plant__right">
                            <div className="footer_plant__right_title_block">
                                    <span className="footer_plant__right_title" >Темы</span>
                                </div>
                                <div className="footer_plant__right_radio_block">
                                    <form className="footer_plant__right_radio_form">
                                        <label>
                                            <input id='radio_1' className="hat" name="radio" type="radio" />
                                            <div className="radio_form__right_radio radio_1">
                                                Шляпа
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_2' className="love" name="radio" type="radio"/>
                                            <div className="radio_form__right_radio radio_2">
                                                Любовь
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_3' className="new_year" name="radio" type="radio"/>
                                            <div className="radio_form__right_radio radio_3">
                                                Новогодняя
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_4' className="rzhuman" name="radio" type="radio"/>
                                            <div className="radio_form__right_radio radio_4">
                                                Ржумен
                                            </div> 
                                        </label>
                                    </form>
                                </div>
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
                                        <button>Смена вида растения</button>
                                    </div>
                                    <div className="footer_plant__right_bottom">
                                        <button>Удалить растение</button>   
                                    </div>
                                    <div className="footer_plant__right_bottom">
                                        <button>Выйти из аккаунта</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}