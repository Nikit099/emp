import { useState } from "react";
import { usePlantsStore } from "../store/zustand";

export default function Emotion(id, typeId) {
   
    const {  date,  typePlants } = usePlantsStore(); 
    const [count, setCount] = useState(0)
    let emotion = []
    let arr = []
    let hum = []
    let prm = ['temperature','illumination', 'humidity', 'airHum']
    const focusDate = date.filter(elem => elem.plantId === id )[0]
    const focusTypeRec = typePlants.filter(elem => elem.id === typeId)[0].recomendation
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      }
      for (let i = 0; i < 2; i++){
        
          if (focusTypeRec[prm[i]].status === true){
            arr = [ focusTypeRec[prm[i]].max, focusTypeRec[prm[i]].high, focusTypeRec[prm[i]].low, focusTypeRec[prm[i]].veryLow, focusTypeRec[prm[i]].min, focusDate[prm[i]] ];
            arr.sort(compareNumeric);
            emotion.push(arr.indexOf(focusDate[prm[i]]))
          }
        
      }
      emotion.push(...hum)
    return emotion
       

    }