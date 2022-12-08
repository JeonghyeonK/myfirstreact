import React, { useState } from "react";
import "./TopBar.css";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = (props) => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);


  return (
    <div className="wrappers">
      {/* 하단 네비게이션 최상위 태그 */}

      <Link to="/first" className="nav-links" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon icon="coins" className="nav-items" />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
    </div>
  );
};

export default TopBar;
