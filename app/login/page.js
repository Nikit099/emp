'use client'
import { useForm } from 'react-hook-form';
import './page.css'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authStore } from '../store/zustand';
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default function login() {
    const { register, handleSubmit, formState: { errors }, reset  } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
      });
      const {login} = authStore()
const onSubmitHandler = (data) => {
    
    login(data.email, data.password)
    reset();
  };
  const registerOptions = {
    email: {
    
    // pattern: {
    //     value: //,
    //     message: "Температура может быть по форме 00-99"
    //   }
    },
    password: {
        maxLength: {
            value: 7,
            message: "В каждом блоке должно быть записано без пробелов и по 3 цифры"
            },
        pattern: {
            value: /\d\d\d-\d\d\d/,
            message: "Освещение может быть по форме 000-999"
          },
        }}

  const handleError = (error) =>{}
    return (

    <div className="wrapper">
        <div className="main">
            <div className="registration">
                <h1 className="registration__title">Логин</h1>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="registration__form">
                    
                    <div className="registration__input-email-block">
                        <input type="text" name='email' {...register("email")} className="registration__input-email" placeholder="Email"/>
                    </div>
                    {errors.email?.message}
                    
                    <div className="registration__input-code-block">
                        <input type="text" name='password' {...register("password")} className="registration__input-password" placeholder="Password"/>
                    </div>
                    {errors.password?.message}
                <button className="registration__button">Войти</button>

                </form>
                <button className="registration__button-have-account">Создать аккаунт</button>
            </div>
        </div>
    </div>

    ) 
    }