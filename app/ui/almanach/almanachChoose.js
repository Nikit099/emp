
import Image from 'next/image';

import magnifyingGlass from '../../../public/dashboard/search.svg';
import plant from '../../../public/almanach/plant.png';

export default function AlmanachChoose ({}) {
    

    return (
        <>
            <aside className="almanach-choose">
                <div className='almanach-choose__container'>
                    <div className="almanach-choose__search">
                        <input className="almanach-choose__search_input"
                                type="text"
                                placeholder="Поиск по растениям"
                        />
                        <Image className="almanach-choose__search_img" 
                                src={magnifyingGlass} 
                                alt='лупа'/>
                    </div>
                    <div className='plants'>
                        <div className='plants__plant'>
                            <div className='plants__block'>
                                <div className='plants__top'></div>
                                <Image className='plants__img'
                                        src={plant}></Image>
                                <div className='plants__title'>Dracena Fr.</div>
                                <div className='plants__desc'>Пара слов о темпераменте</div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}