
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Link from 'next/link';
export default function FortmChart({name, keyPf, changeChart}) {
    
    return (
    <>
                              
    <input  id='radio_1' className="day" name="radio" type="radio" />
    <div onClick={()=> changeChart(keyPf)} className="radio_form__left_radio radio_1">
        
        {name}
    </div> 
    
                                    
    </>
    ) 
    }