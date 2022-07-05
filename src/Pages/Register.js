import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GreateAuth from "../components/GreateAuth";
import phoneNumberFormatter from "../Helper/PhoneNumberFormatter";

const Register = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ ...data, phoneValue });
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

              <input
                className="input"
                type="tel"
                placeholder={"Phone Number"}
                onChange={(e) =>
                  setPhoneValue(phoneNumberFormatter(e.target.value))
                }
                value={phoneValue}
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
