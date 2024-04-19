'use client';
import './page.css';

import React, { useState } from 'react';
import Image from 'next/image';
import deleteDashboard from '@/public/dashboard/delete.svg';

const PlantChoose = () => {
  const [date, setDate] = useState(new Date());

  const renderCalendar = () => {
    const currentMonth = date.getMonth();
    const daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), currentMonth, 1).getDay();

    const days = [];

    // Заполняем пустые ячейки в начале календаря
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    // Заполняем дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div key={i} className="day">{i}</div>);
    }

    return <div className="calendar">{days}</div>;
  };

  // Помечаем компонент как клиентский
  useClient();

  return (
    <>
      <div className="calendar__container">
        <div className="calendar__block">
          <div className="calendar__sides">
            <div className="calendar__block_left">
              <span className="calendar__title">Расписание ухода</span>
              <div className="calendar__buttons_block">
                <div className="calendar__block__radio">
                  <label>
                    <input id='radio-1' className="calendar__week" name="radio" type="radio" />
                    <div className="calendar__block__castom-radio calendar__radio-1">
                      Неделя
                    </div>
                  </label>
                  <label>
                    <input id='radio-2' className="calendar__month" name="radio" type="radio" />
                    <div className="calendar__block__castom-radio calendar__radio-2">
                      Месяц
                    </div>
                  </label>
                </div>
                <div className='calendar__button_ical'>Скачать календарь в формате iCal</div>
              </div>
            </div>
            <div className="calendar__block_right">
              <Image className="calendar__delete" src={deleteDashboard} alt="удалить группу" />
            </div>
          </div>
          {renderCalendar()} {/* Вызываем функцию renderCalendar */}
        </div>
      </div>
    </>
  );
};

export default PlantChoose;
