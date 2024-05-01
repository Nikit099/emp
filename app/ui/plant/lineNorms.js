'use client'
import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LineNorms({name, min, max}) {
    const [norm, setNorm] = useState('')
    const [castomError, setCastomError] = useState({temperature:'', illumination: '', humidity: '', airHum: ''})
  
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
        
    if(Number(num1) > Number(num2)){
        setCastomError({...castomError, [name]: 'Первое число должно быть меньше второго' })
    } else{
        setCastomError({...castomError, [name]: '' })
    }
    }

  };
  const handleError = (errors) => {
    console.log(errors);
  };
  const registerOptions = {
    temperature: {
    maxLength: {
        value: 5,
        message: "В каждом блоке должно быть записано без пробелов и по 2 цифры "
        },
    pattern: {
        value: /\d\d-\d\d/,
        message: "Температура должна быть записана как 01-99"
      }
    },
    illumination: {
        maxLength: {
            value: 7,
            message: "В каждом блоке должно быть записано без пробелов и по 3 цифры"
            },
        pattern: {
            value: /\d\d\d-\d\d\d/,
            message: "Освещение должно быть записано как 000-000"
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
    return (

        <div className="line">
        <div className="line__title">{name}</div>
        <div className="line__parameter">{
            max ? (min + ' min' + ' - ' + max + ' max') : min + ' min'
        }</div>
        <div className="line__reset">
            <Image className="line__reset_img"
                   src={rotate}
                   alt='Отменить'></Image>
        </div>
        <div className="line__input_block">
            <form onSubmit={handleSubmit(handleSubminForm, handleError)} className="line__form">
                {/* <Image className="line__pen"
                       src={pen}
                       alt='Редактировать'></Image> */}
                <input name={name} {...register(`${name}`, registerOptions[name] )} className="line__input"  type="text"
                    placeholder="От - До"></input>
              
            </form>
            {errors[name] && errors[name].message || castomError[name]}
        </div>
    </div>
    ) 
    }