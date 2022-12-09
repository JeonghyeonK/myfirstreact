import "./PostPage.css";

// 사용할 아이콘 import
import "../FontAwesome.js";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 사용할 아이콘 import
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// 사용할 아이콘 import

const PostPage = (props) => {
  // 현재 선택된 아이콘을 관리하는 state

  // 현재 선택된 아이콘을 관리하는 state
  const [Content, setContent] = useState([]);

  const thisUrl = new URL(window.location.href);
  const urlParams = thisUrl.searchParams;
  console.log("urlurl : " + urlParams.get("url"));

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-38-105-156.ap-northeast-2.compute.amazonaws.com/find?url=" +
          urlParams.get("url")
      )
      .then((response) => {
        setContent(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="wrap-horizontal">
      <img class="image" src={Content.url} alt=""></img>
      <p class="title">{Content.nftName}</p>
      <p class="artist">{Content.username}</p>

      <div class="priceandheart">
        <span class="price-and-icon">
          <FontAwesomeIcon icon="coins" />
          <span class="item-price">{Content.price}</span>
        </span>
        <span class="right">
          <FontAwesomeIcon icon="heart" />
          <span class="item-heart">{Content.likes}</span>
        </span>
      </div>
      <h2 class="desc">Description</h2>
      <p class="description">{Content.description}</p>
    </div>
  );
};

export default PostPage;
