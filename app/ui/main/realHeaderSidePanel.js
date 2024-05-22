import '../../../app/page.scss';
import Link from "next/link";

export default function RealHeaderSidePanel ({handleSidePanel}) {
    
    
    return (
    <>
    <div className='real-header-side-panel__wrapper'>
        <aside className='real-header-side-panel'>
            <svg  className='real-header-side-panel__cross' 
                    onClick={handleSidePanel}
                    width="49" 
                    height="49" 
                    viewBox="0 0 49 49" 
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.1886 18.3391C33.7743 17.7533 33.7743 16.8036 33.1886 16.2178L32.57 15.5992C31.9842 15.0134 31.0344 15.0134 30.4487 15.5992L24.7481 21.2998C24.5528 21.495 24.2362 21.495 24.041 21.2998L18.3404 15.5992C17.7546 15.0134 16.8049 15.0134 16.2191 15.5992L15.6005 16.2178C15.0147 16.8036 15.0147 17.7533 15.6005 18.3391L21.3011 24.0397C21.4963 24.2349 21.4963 24.5515 21.3011 24.7468L15.6005 30.4474C15.0147 31.0331 15.0147 31.9829 15.6005 32.5687L16.2191 33.1873C16.8049 33.773 17.7546 33.773 18.3404 33.1873L24.041 27.4867C24.2362 27.2914 24.5528 27.2914 24.7481 27.4867L30.4487 33.1873C31.0344 33.773 31.9842 33.773 32.57 33.1873L33.1886 32.5687C33.7743 31.9829 33.7743 31.0331 33.1886 30.4474L27.488 24.7468C27.2927 24.5515 27.2927 24.2349 27.488 24.0397L33.1886 18.3391Z" fill="#498553" stroke="#498553" stroke-linecap="round"/>
            </svg>
            <nav className='real-header-side-panel__nav'>
                <ul>
                    <li>
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <div className='real-header-side-panel__hr'></div>
                    <li>
                        <Link href={'/almanach'}>Альманах</Link>
                    </li>
                    <div className='real-header-side-panel__hr'></div>
                    <li>
                        <Link href={'/setting'}>Настройки</Link>
                    </li>
                    <div className='real-header-side-panel__hr'></div>
                    <li>
                        <Link href={'/dashboard'}>Статистика</Link>
                    </li>
                    <div className='real-header-side-panel__hr'></div>
                </ul>
            </nav>
        </aside>
    </div>
    </>
    );
}