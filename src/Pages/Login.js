import React from "react";
import GreateAuth from "../components/GreateAuth";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <GreateAuth
      left={
        <>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input"
              type="email"
              placeholder="Email"
              {...register("Email", {
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              })}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              {...register("Password", { required: true, min: 8 })}
            />

            <input type="submit" className="btn btn-primary" value="Kirish" />
            <p>
              Ro'yxatdan o'tmaganmisiz?{" "}
              <Link to="/register">Ro'yxatdan o'tish</Link>
            </p>
          </form>
        </>
      }
      right={
        <div className="auth_right">
          <img src="../../img/signin.jpg" alt="" />
        </div>
      }
    />
  );
};

export default Login;
