import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import detectEthereumProvider from "@metamask/detect-provider";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import { Link } from "react-router-dom";
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(account[0]);
  };

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? <span>X</span> : <>≡</>}
        </button>
        <button onClick={() => connectWallet()} className={styles.button2}>
          {<span>로그인</span>}
        </button>
        <div className={styles.content}>
          <Link
            to="/contentlist/art"
            className="nav-links"
            onClick={() => toggleMenu()}
          >
            <p>Art</p>
          </Link>
          <Link
            to="/contentlist/photo"
            className="nav-links"
            onClick={() => toggleMenu()}
          >
            <p>Photo</p>
          </Link>
          <Link
            to="/contentlist/video"
            className="nav-links"
            onClick={() => toggleMenu()}
          >
            <p>Video</p>
          </Link>
          <Link
            to="/contentlist/music"
            className="nav-links"
            onClick={() => toggleMenu()}
          >
            <p>Music</p>
          </Link>
        </div>
        {/* 사이드바 */}
      </div>
    </div>
  );
};

export default Sidebar;
