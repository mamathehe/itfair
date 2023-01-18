import React from "react";
import Himatif from "../../asets/png/HIMATIF.png";
import ITFair from "../../asets/png/ITFAIR62022.png";
import Kabinet from "../../asets/png/logoKabinet.png";
import Ilustrasi from "../../asets/png/ilustrasi.png";
import  {AiOutlineUser} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="loginTop">
          <div className="loginTopLeft">
            <img src={Himatif} alt="Logo Himatif" />
            <img src={Kabinet} alt="Logo Kabinet" />
          </div>
          <div className="loginTopRight">
            <img src={ITFair} id="itFairLogo" alt="Logo IT-Fair" />
          </div>
        </div>
        <div className="loginImg">
          <img src={Ilustrasi} alt="Ilustrasi" />
          <h1>WELCOME TO</h1>
          <h1>IT CUP 2023</h1>
          <p>Untuk masuk , login menggunakan akun salam</p>
        </div>
        <div className="loginForm">
          <form action="">
            <div className="loginUsername">
              < AiOutlineUser className="usernameIcon"/>
              <input type="text"  placeholder="Username"/>
            </div>
            <div className="loginPassword">
                <RiLockPasswordLine className="usernameIcon"/>
              <input type="password" placeholder="Password"/>
            </div>
            <button>MASUK</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
