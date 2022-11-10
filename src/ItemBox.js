import "./ItemBox.css";

// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 사용할 아이콘 import
import { Link } from "react-router-dom";

const ItemBox = (props) => {
  // 현재 선택된 아이콘을 관리하는 state

  const nextUrl = `/postpage?url=` + props.photo;

  return (
    <Link to={nextUrl} className="item-box">
      <img src={props.photo} class="thumbnail" alt="" />
      <p class="title">{props.title}</p>
      <p class="artist">{props.artist}</p>

      <div class="priceandheart">
        <FontAwesomeIcon icon="coins" />
        <span class="item-price">{props.price}</span>

        <span class="right">
          <FontAwesomeIcon icon="heart" />
          <span class="item-heart">{props.likes}</span>
        </span>
      </div>
    </Link>
  );
};

export default ItemBox;
