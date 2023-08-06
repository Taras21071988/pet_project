import React from 'react'
import cl from './Login.module.scss'

import { TextField, Button, Typography } from '@mui/material'

const Login = (props) => {
  const { setEmail, setPassword } = props;

  return (
    <div className={cl.login}>
      <div className='container'>
        <div className={cl.form}>
          <Typography variant="h2" marginBottom={3} textAlign='center' fontFamily='Montserrat' >
            Авторизация
          </Typography>
          <Typography variant="body1" marginBottom={3} textAlign='center' fontFamily='Montserrat' >
            Введите ваш логин и пароль
          </Typography>
          <TextField fullWidth={true} margin='normal' id="outlined-basic_login" label="Login" variant="outlined" placeholder='Введите ваш login' onChange={(e) => setEmail(e.target.value)} />
          <TextField type='password' fullWidth={true} margin='normal' id="outlined-basic_password" label="Password" variant="outlined" placeholder='Введите ваш password' onChange={(e) => setPassword(e.target.value)} />
          <Button type='submit' sx={{ fontFamily: 'Montserrat', width: '60%', marginBottom: 2, marginTop: 2 }} variant="contained" >Войти</Button>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}  >У вас нет аккаунта?
            <span className={cl.span__register}>Регистрация</span>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Login