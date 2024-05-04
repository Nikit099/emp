import plus from '@/public/dashboard/plus.svg';

import Image from 'next/image';

import { usePlantsStore } from "@/app/store/zustand"


export default function Problems ({closeProblems}) {
    
    const { data } = usePlantsStore();

    return (
        <>
            <aside className="side_panel">
                <div className="side_panel__container">
                    <div className="side_panel__header">
                        <div className='side_panel__header_left'>
                            <span className="side_panel__title">
                                Возникшие проблемы
                            </span>
                        </div>
                        <div className='side_panel__header_right'>
                            <Image className='side_panel__header_close'
                                    src={plus}
                                    alt='закрыть'
                                    onClick={closeProblems}>

                            </Image>
                        </div>
                    </div>
                    <div className="messagebox">
                        <div className="messagebox__graph_block">
                            <div className="messagebox__graph_title">
                                Освещение 29.03.2024 - 30.03.2024
                            </div>
                            <div className="messagebox__graph"></div>
                        </div>
                        <div className="messagebox__message_block">
                            <div className="messagebox__message">
                                <div className="messagebox__message_title">
                                    С 14ч 56мин До 18ч 56мин
                                </div>
                                <div className="messagebox__message_description">
                                    Вам необходимо увеличить дозировку света вашему растению
                                </div>
                            </div>
                        </div>
                        <div className="messagebox__hr"></div>
                    </div>
                </div>
            </aside>
        </>
    )
}