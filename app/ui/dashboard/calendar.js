
import Image from 'next/image';

import deleteDashboard from '@/public/dashboard/delete.svg';



export default function Calendar ({closeCalendar}) {
    
    
    return (
    <>
    <div className="calendar__container">
        <div className="calendar__block">
            <div className="calendar__sides">
                <div className="calendar__block_left">
                    <span className="calendar__title" >Расписание ухода</span>
                    <div className="calendar__buttons_block">
                    <div className="calendar__block__radio">
                        <label>
                            <input id='radio-1' className="calendar__week" name="radio" type="radio"/>
                            <div className="calendar__block__castom-radio calendar__radio-1">
                                Неделя
                            </div> 
                        </label>
                        <label>
                            <input id='radio-2' className="calendar__month" name="radio" type="radio"/>
                            <div className="calendar__block__castom-radio calendar__radio-2">
                                Месяц
                            </div> 
                        </label>
                    </div>
                        <div className='calendar__button_ical'>Скачать календарь в формате iCal</div>
                    </div>
                </div>
                <div className="calendar__block_right">
                    <Image className="calendar__delete" 
                           src={deleteDashboard} 
                           alt="удалить группу"
                           onClick={closeCalendar}/>
                </div>
            </div>
            <>{}</>
        </div>
    </div>
    </>
    );
}