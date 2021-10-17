import React, { useCallback, useEffect, useState } from "react";
import SignUp from "../assets/signup.gif";
import Input from "../Components/Input";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [username, setUsername] = useState({
    value: "",
    err: false,
    msg: "",
  });
  const [email, setEmail] = useState({ value: "", err: false, msg: "" });
  const [password, setPassword] = useState({
    value: "",
    err: false,
    msg: "",
  });
  const [cpassword, setCpassword] = useState({
    value: "",
    err: false,
    msg: "",
  });

  const submitHandler = useCallback(() => {
    if (
      username.value === "" ||
      email.value === "" ||
      password.value === "" ||
      cpassword.value === ""
    ) {
      if (username.value === "") {
        console.log("in");
        setUsername((prev) => ({
          ...prev,
          err: true,
          msg: "Please fill this required field!",
        }));
      } else {
        setUsername((prev) => ({ ...prev, err: false }));
      }
      if (email.value === "") {
        setEmail((prev) => ({
          ...prev,
          err: true,
          msg: "Please fill this required field!",
        }));
      } else {
        setEmail((prev) => ({ ...prev, err: false }));
      }
      if (password.value === "") {
        setPassword((prev) => ({
          ...prev,
          err: true,
          msg: "Please fill this required field!",
        }));
      } else {
        setPassword((prev) => ({ ...prev, err: false }));
      }
      if (cpassword.value === "") {
        setCpassword((prev) => ({
          ...prev,
          err: true,
          msg: "Please fill this required field!",
        }));
      } else {
        setCpassword((prev) => ({ ...prev, err: false }));
      }
    } else {
      setUsername((prev) => ({ ...prev, err: false }));
      setEmail((prev) => ({ ...prev, err: false }));
      setPassword((prev) => ({ ...prev, err: false }));
      setCpassword((prev) => ({ ...prev, err: false }));
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email.value).toLowerCase())) {
        setEmail((prev) => ({
          ...prev,
          err: true,
          msg: "Please enter a valid email address!",
        }));
        return;
      }

      if (password.value !== cpassword.value) {
        setCpassword((prev) => ({
          ...prev,
          err: true,
          msg: "Password and Confirm Password fields do not match!",
        }));
        return;
      }

      history.push("/signin");
    }
  }, [username, email, password, cpassword]);

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="d-flex justify-content-evenly align-items-center shadow p-3 py-4 px-lg-5">
        <div className="d-none d-md-block">
          <img src={SignUp} className="image m-3" alt="..." />
        </div>
        <div className="">
          <p className="lead fw-bold">Join Us!</p>
          <Input
            iconClass="bi bi-person-fill"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            data={username}
            setData={setUsername}
            type="text"
            placeholder="User Name"
            name="username"
            err={username.err}
            msg={username.msg}
          />
          <Input
            iconClass="bi bi-envelop-fill"
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            data={email}
            setData={setEmail}
            type="email"
            placeholder="Email"
            name="email"
            err={email.err}
            msg={email.msg}
          />
          <Input
            iconClass="bi bi-key"
            d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
            data={password}
            setData={setPassword}
            type="password"
            placeholder="Password"
            name="password"
            err={password.err}
            msg={password.msg}
          />
          <Input
            iconClass="bi bi-key-fill"
            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            data={cpassword}
            setData={setCpassword}
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            err={cpassword.err}
            msg={cpassword.msg}
          />
          <button className="btn btn-primary mt-4" onClick={submitHandler}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
