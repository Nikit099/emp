import '../../../app/page.scss';

export default function RealHeader ({}) {
    
    
    return (
    <>
    <div className='real-header__wrapper'>
        <header className='real-header'>
            <nav className='real-header__nav'>
                <ul>
                    <li>
                        <a>Главная</a>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <a>Альманах</a>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <a>Настройки</a>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <a>Статистика</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    </div>
    </>
    );
}