import "./ContentList.css";
import "./common.css";
import ItemBox from "./ItemBox";
import axios from "axios";
import { useEffect, useState } from "react";
// 사용할 아이콘 import

const ContentList = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [itemBox, setItemBox] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-39-248-132.ap-northeast-2.compute.amazonaws.com/10files"
      )
      .then((response) => {
        setItemBox(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div class="wrap-horizontal">
      {/* 하단 네비게이션 최상위 태그 */}

      <h2>New</h2>
      <div class="wrap-vertical">
        {itemBox.map((element) => (
          <ItemBox
            photo={element.url}
            artist={element.username}
            title={element.nftName}
            likes={element.likes}
            price={element.price}
          />
        ))}
      </div>

      <h2>Category</h2>
      <div class="wrap-vertical">
        <div class="category-box">Art</div>
        <div class="category-box">Photo</div>
        <div class="category-box">Video</div>
        <div class="category-box">Music</div>
      </div>

      {/*
      <h2>Hot</h2>
      <div class="wrap-vertical">
        {itemBox.map((element) => (
          <ItemBox
            photo={element.url}
            artist={element.username}
            title={element.nftName}
            likes={element.likes}
            price={element.price}
          />
        ))}
      </div>
        */}
    </div>
  );
};

export default ContentList;
