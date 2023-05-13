import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../component/Modal";

function SignUp() {
  const [data, setData] = useState({});
  const[show,setShow] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm();
  console.log("SignUp.js rendered");
  const onSubmit = (data) => {
    setData(data)
    setShow(true)
    console.log(data);
  }; 
  return (
    <>
    <Modal data={data} show={show} setShow={setShow}/>
      <div className="intro">
        <h1>Become a member</h1>
        <p>Please enter your details</p>
      </div>
      <div className="form">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label>Full Name</label> <br />
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            {...register("fullname", {
              required: {
                value: true,
                message: "input field is required",
              },
              minLength: {
                value: 2,
                message: "input character can't be less than 2"
              }
            })}
          />
          <span style={{color:"red", fontSize:"small", position:"relative", top:"-10px"}}>{errors?.fullname?.message}</span>
          <br />
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "input field is required",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "input a valid email",
              },
            })}
          />
          <span style={{color:"red", fontSize:"small", position:"relative", top:"-10px"}}>{errors?.email?.message}</span>
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "input field is required",
              },
              pattern: {
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,  message:"password must contain at least one uppercase, one lowercase, one number and one special character"},
            })}
          />
          <span style={{color:"red", fontSize:"small", position:"relative", top:"-10px"}}>{errors?.password?.message}</span>
          <br />
          <button type="submit">Sign Up</button> <br />
          <Link to="/">
            <span style={{ fontWeight: "normal" }}>
              Already have an account?
            </span>{" "}
            Sign In
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
