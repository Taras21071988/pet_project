import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import cl from "./Register.module.scss";

const Register = (props) => {
  const {
    setEmail,
    setPassword,
    setRepeatPassword,
    setFirstName,
    setUsername,
  } = props;

  return (
    <div className={cl.register}>
      <div className="container">
        <div className={cl.form}>
          <Typography
            variant="h2"
            marginBottom={3}
            textAlign="center"
            fontFamily="Montserrat"
          >
            Регистрация
          </Typography>
          <Typography
            variant="body1"
            marginBottom={3}
            textAlign="center"
            fontFamily="Montserrat"
          >
            Введите данные для регистрации
          </Typography>
          <TextField
            fullWidth={true}
            margin="normal"
            id="outlined-basic_firstName"
            label="Name"
            variant="outlined"
            placeholder="Введите ваш Имя"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="outlined-basic_username"
            label="Username"
            variant="outlined"
            placeholder="Введите ваш Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth={true}
            margin="normal"
            id="outlined-basic_email"
            label="Email"
            variant="outlined"
            placeholder="Введите ваш Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            fullWidth={true}
            margin="normal"
            id="outlined-basic_password"
            label="Password"
            variant="outlined"
            placeholder="Введите ваш password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="password"
            fullWidth={true}
            margin="normal"
            id="outlined-basic_repeatPassword"
            label="Repeat Password"
            variant="outlined"
            placeholder="Повторите ваш password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              fontFamily: "Montserrat",
              width: "60%",
              marginBottom: 2,
              marginTop: 2,
            }}
            variant="contained"
          >
            Зарегестрироваться
          </Button>
          <Typography variant="body1" sx={{ fontFamily: "Montserrat" }}>
            У вас есть аккаунт?
            <span className={cl.span__register}>Войти</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;
