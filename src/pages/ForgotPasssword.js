import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../component/Modal";
function ForgotPassword() {
  const [data, setData] = useState({});
  const[show,setShow] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm();
  console.log("ForgotPassword.js rendered");
  const onSubmit = (data) => {
    setData(data)
    setShow(true)
    console.log(data);
  }; 
  return (
    <>
    <Modal data={data} show={show} setShow={setShow}/>
      <div className="intro">
        <h1>Reset Your Password</h1>
        <p>Please enter the email associated with your account</p>
      </div>
      <div className="form">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Reset</button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
