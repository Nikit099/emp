'use client'
import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePlantsStore } from '@/app/store/zustand';

export default function LineNorms({name, min, max, id, objNorms, plantId}) {
    const [norm, setNorm] = useState('')
    const [castomError, setCastomError] = useState({temperature:'', illumination: '', humidity: '', airHum: ''})
    const { setCastomNorms, plants, typePlants} = usePlantsStore()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
      });
  const handleSubminForm = (data) => {
    let num1 = ''
    let num2 = ''
    let flag = ''
    for(let i = 0; i < data[name].length; i++){
        if(/[0-9]/.test(data[name][i])){
            if(!flag){
                num1 = num1 + data[name][i]
            }else{
                num2 = num2 + data[name][i]
            }
        }else{
            flag = data[name][i]
        }
        
    }
    if(num2){
        
    if(Number(num1) >= Number(num2)){
        setCastomError({...castomError, [name]: 'Первое число должно быть меньше второго' })
    } else{
        setCastomError({...castomError, [name]: '' })
        const newNorm = objNorms.map(elem => elem.name === name ? {...elem, max: Number(num2), min: Number(num1)} : {...elem})
        setCastomNorms(id,newNorm )
    }
    }else{
        const newNorm = objNorms.map(elem => elem.name === name ? {...elem,  min: Number(num1)} : {...elem})
        setCastomNorms(id,newNorm )
    }

  };
  function resetNorm() {
    let newNorm
    const typeId = plants.filter(elem => elem.id == plantId)[0].typeId
    const objRec = typePlants.filter(elem => elem.id == typeId)[0].recomendation[name]
    if(!objRec.max){
        newNorm = objNorms.map(elem => elem.name === name ? {...elem,  min: objRec.min} : {...elem})

    }else{
        newNorm = objNorms.map(elem => elem.name === name ? {...elem, max: objRec.high, min: objRec.low} : {...elem})

    }
    setCastomNorms(id,newNorm )
  }

  const registerOptions = {
    temperature: {
    maxLength: {
        value: 5,
        message: "В каждом блоке должно быть записано без пробелов и по 2 цифры "
        },
    pattern: {
        value: /\d\d-\d\d/,
        message: "Температура может быть по форме 00-99"
      }
    },
    illumination: {
        maxLength: {
            value: 7,
            message: "В каждом блоке должно быть записано без пробелов и по 3 цифры"
            },
        pattern: {
            value: /\d\d\d-\d\d\d/,
            message: "Освещение может быть по форме 000-999"
          },
        
    },
    humidity: {
        maxLength: {
            value: 2,
            message: "Влажность может быть до 99%"
            },
        pattern: {
            value: /\d\d/,
            message: "Влажность почвы должна быть записана как 00"
          }
    },
    airHum:{
        maxLength: {
            value: 2,
            message: "Влажность может быть до 99%"
            },
        pattern: {
            value: /\d\d/,
            message: "Влажность воздуха должна быть записана как 00"
          }
    }
  };
  const handleError = (error) =>{}
    return (

        <div className="line_mob">
            <div className='line_data'>
            <div className="line__title_mob">{name}</div>
        <div className="line__parameter">{
            max ? (min + ' min' + ' - ' + max + ' max') : min + ' min'
        }</div>
            </div>
        
            <Image onClick={resetNorm} className="line__reset_img"
                   src={rotate}
                   alt='Отменить'></Image>
            <form onSubmit={handleSubmit(handleSubminForm, handleError)} className="line__form_mob">
                {/* <Image className="line__pen"
                       src={pen}
                       alt='Редактировать'></Image> */}
                <input name={name} {...register(`${name}`, registerOptions[name] )} className="line__input_mob"  type="text"
                    placeholder="От - До"></input>
              
            </form>
            <div className='error_message'>{errors[name] && errors[name].message || castomError[name]}</div>

        
    </div>
    ) 
    }