import React from "react";
import Himatif from "../../asets/png/HIMATIF.png";
import ITFair from "../../asets/png/ITFAIR62022.png";
import Kabinet from "../../asets/png/logoKabinet.png";
import Ilustrasi from "../../asets/png/ilustrasi.png";
import { AiOutlineUser , AiOutlineWhatsApp , AiFillGithub } from "react-icons/ai";
import "./editprofile.css";

const EditProfile = () => {
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
        <div className="editImg">
          <img src={Ilustrasi} alt="Ilustrasi" />
          <h1>LENGKAPI DATA</h1>
          <h1>UNTUK MEMULAI QUIZ</h1>
        </div>
        <div className="loginForm">
          <form action="">
            <div className="loginUsername">
              <AiOutlineUser className="usernameIcon" />
              <input type="text" placeholder="Nama Lengkap" />
            </div>
            <div className="loginPassword">
              <AiOutlineWhatsApp className="usernameIcon" />
              <input type="password" placeholder="No. WhatsApp" />
            </div>
            <div className="loginPassword">
              <AiFillGithub className="usernameIcon" />
              <input type="text" placeholder="Link Github/Gitlab" />
            </div>
            <p>
              Belum punya link GitHub? <a href="#">Cara Buat</a>
            </p>
            <div className="checkbox">
              <input type="checkbox" id="checkbox"/>
              <label htmlFor="checkbox">
                I agree to the <a href="">terms & conditions</a> and <a href="">privacy policy</a>
              </label>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
