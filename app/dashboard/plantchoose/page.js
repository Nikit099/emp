import './page.css';

import Image from 'next/image';

import deleteDashboard from '@/public/dashboard/delete.svg';
import magnifyingGlass from '@/public/dashboard/search.svg';



export default function PlantChoose () {
    return (
    <>
    <div className="plantchoose__container">
        <div className="plantchoose__block">
            <div className="plantchoose__sides">
                <div className="plantchoose__block_left">
                    <span className="plantchoose__title" >Выбрать растение</span>
                    <div className="plantchoose__search">
                        <input className="plantchoose__search_input"
                               type="search"
                               placeholder="Поиск по растениям" />
                        <Image className="plantchoose__search_img" src={magnifyingGlass} alt='лупа'/>
                    </div>
                </div>
                <div className="plantchoose__block_right">
                    <Image className="plantchoose__delete" src={deleteDashboard} alt="удалить группу"/>
                </div>
            </div>
            <></>
        </div>
    </div>
    </>
    );
}