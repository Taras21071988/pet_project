import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import cl from "./RouteAuth.module.scss";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../srore/slice/auth";

const RouteAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === "/Login") {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post("/auth/login", userData);
        await dispatch(login(user.data));
        navigate("/Sertificates");
      } catch (error) {
        return error;
      }
    } else {
      if (password === repeatPassword) {
        const userData = {
          firstName,
          username,
          email,
          password,
        };
        const newUser = await instance.post("/auth/register", userData);
        console.log(newUser.data);
      } else {
        alert("У Вас не совпадают пароли!!!");
      }
    }
  };

  return (
    <div className={cl.routeAuth}>
      <div className="container">
        <form className={cl.form} onSubmit={handleSubmit}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            maxWidth={640}
            margin="auto"
            padding={5}
            borderRadius={5}
            boxShadow={"5px 5px 10px rgba(157, 213, 88, 0.75)"}
          >
            {location.pathname === "/Login" ? (
              <Login setEmail={setEmail} setPassword={setPassword} />
            ) : location.pathname === "/Register" ? (
              <Register
                setEmail={setEmail}
                setPassword={setPassword}
                setRepeatPassword={setRepeatPassword}
                setFirstName={setFirstName}
                setUsername={setUsername}
              />
            ) : null}
          </Box>
        </form>
      </div>
    </div>
  );
};

export default RouteAuth;
