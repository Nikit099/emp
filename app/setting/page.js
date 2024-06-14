'use client'
import Image from 'next/image';

import edit from '@/public/settings/edit.svg';
import tongue from '@/public/settings/tongue.svg';

import './page.scss';
import RealHeader from '../ui/realHeader';

export default function Settings ({}) {
    
    
    return (
    <>
        <RealHeader/>
        <div className='settings'>
            <div className='settings__container'>
                <div className='settings__block'>
                    <div className='settings__person'>
                        <div className='settings__photo'>
                            <Image src={tongue}></Image>
                        </div>
                        <div className='settings__name'>
                            <input></input>
                            <Image src={edit}></Image>
                        </div>
                    </div>
                    <div className='settings__login-block'>
                        <div className='settings__login-title'>Логин</div>
                        <div className='settings__login'>
                            <input></input>
                            <Image src={edit}></Image>
                        </div>
                    </div>
                    <div className='settings__pas-block'>
                        <div className='settings__pas-title'>Пароль</div>
                        <div className='settings__pas'>
                            <input></input>
                            <Image src={edit}></Image> 
                        </div>
                    </div>
                    <div className='settings__button'>Выйти из аккаунта</div>
                </div>
            </div>
        </div>
        
    </>
    );
}