
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Link from 'next/link';
export default function FortmChart({name, keyPf, choice, changeChart}) {
    return (
    <>
    <div onClick={()=> changeChart(keyPf)} className={choice ? 'radio_form__left_radio_mob_active' : 'radio_form__left_radio_mob'}>
        
        {name}
    </div> 
    
                                    
    </>
    ) 
    }