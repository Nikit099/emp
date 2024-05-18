import Image from 'next/image';

import './page.scss';
import RealHeader from '../ui/main/realHeader';

export default function Settings ({}) {
    
    
    return (
    <>
        <RealHeader/>
        <div className='settings'>
            <div className='settings__container'>
                <div className='settings__block'>
                    <div className='settings__person'>
                        <div className='settings__photo'>
                            <Image></Image>
                            <Image></Image>
                        </div>
                        <div className='settings__name'>
                            <input></input>
                            <Image></Image>
                        </div>
                    </div>
                    <div className='settings__login-block'>
                        <div className='settings__login-title'>Логин</div>
                        <div className='settings__login'>
                            <input></input>
                            <Image></Image>
                        </div>
                    </div>
                    <div className='settings__pas-block'>
                        <div className='settings__pas-title'>Пароль</div>
                        <div className='settings__pas'>
                            <input></input>
                            <Image></Image> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
}