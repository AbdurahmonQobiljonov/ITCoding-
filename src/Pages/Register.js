import React from "react";
import "cleave.js/dist/addons/cleave-phone.ug";
import Cleave from "cleave.js/react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GreateAuth from "../components/GreateAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <GreateAuth
        left={
          <>
            {" "}
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                {...register("Full Name", { required: true, maxLength: 80 })}
              />

              <input
                className="input"
                type="email"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
              />

              <Cleave
                className="input"
                placeholder="Phone Number"
                options={{ phone: true, phoneRegionCode: "ru" }}
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                {...register("Password", { required: true, min: 8 })}
              />

              <input
                className="input"
                type="password"
                placeholder="Password Confirm"
                {...register("Password Confirm", { required: true, min: 8 })}
              />
              <p>
                Avval ro'yxatdan o'tganmisiz? <Link to="/login">Kirish</Link>
              </p>
              <input
                type="submit"
                className="btn btn-primary"
                value="Ro'yxatdan o'tish"
              />
            </form>
          </>
        }
        right={
          <div className="auth_right">
            <img src="../../img/signup.jpg" alt="" />
          </div>
        }
      />
    </>
  );
};

export default Register;
