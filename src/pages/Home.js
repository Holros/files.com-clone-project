import googleIcon from "../img/googleIcon.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../component/Modal";
function Home() {
  const [data, setData] = useState({});
  const[show,setShow] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm();
  console.log("Home rendered");
  const onSubmit = (data) => {
    setData(data)
    setShow(true)
    console.log(data);
  }; 
  return (
    <>
    <Modal data={data} show={show} setShow={setShow}/>
      <div className="intro">
        <h1>Welcome Back</h1> 
        <p>Please enter your details</p>
      </div>
      <div className="form">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
              minLength: {
                value: 4,
                message: "password can't be less than 4 characters",
              },
            })}
          />
          <span style={{color:"red", fontSize:"small", position:"relative", top:"-10px"}}>{errors?.password?.message}</span>
          <br />
          <Link
            to="/forgotpassword"
            style={{ display: "block", fontSize: "13px" }}
          >
            Forgot Password?
          </Link>{" "}
          <br />
          <button type="submit">Sign In</button> <br />
          <button className="special" onClick={(event)=>{
            event.preventDefault()
            alert("sorry this feature is currently not available")}}>
            {" "}
            <div className="bind">
              <img alt="googleicon" src={googleIcon} />
              Sign In With Google
            </div>
          </button>{" "}
          <br />
          <Link to="/signup">
            <span style={{ fontWeight: "normal" }}>Don't have an account?</span>{" "}
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}

export default Home;
