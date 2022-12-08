import "../ContentList.css";
import "./CreateNFT.css";
import "../common.css";
// 사용할 아이콘 import

// async function getData() {
//     try {
//       //응답 성공
//       const response = await axios.get(
//         "http://ec2-3-38-105-156.ap-northeast-2.compute.amazonaws.com/10files"
//       );
//       console.log(response);
//     } catch (error) {
//       //응답 실패
//       console.error(error);
//     }
//   }

const Fourth = () => {
  // 현재 선택된 아이콘을 관리하는 state

  return (
    <div class="wrap-horizontal">
      {/* 하단 네비게이션 최상위 태그 */}

      <h2>Test..</h2>
      <input
        type="text"
        name="my_name"
        size="20"
        class="one-line"
        placeholder="Name"
      ></input>

      <h2>Contents</h2>
      <h4>
        File types supported: JPG, PNG, GIF, SVG, MP4, MP3, WAV, OGG, GLB, GLTF.
        Max size: 100 MB
      </h4>
      <input type="file" name="contents" class="one-line"></input>

      <h2>Description</h2>
      <h4>
        The description will be included on the item’s detail page underneath
        its image.
      </h4>
      <textarea
        name="description"
        size="20"
        placeholder="Provide detailed descriptions of your item."
      ></textarea>

      <h2>Collection</h2>
      <h4>This is the collection where your item will appear.</h4>
      <select name="collection" class="one-line" placeholder="Collection">
        <option value="" disabled selected hidden>
          Collection
        </option>
        <option value="Collection1">Collection1</option>
        <option value="Collection2">Collection2</option>
        <option value="Collection3">Collection3</option>
        <option value="Collection4">Collection4</option>
      </select>

      <div class="property_area">
        <div class="text_zone">
          <h2>Properties</h2>
          <h4>Textual traits that show up as rectangles</h4>
        </div>
        <div class="file_zone">
          <input type="file" name="contents"></input>
        </div>
      </div>

      <div class="property_area">
        <div class="text_zone">
          <h2>Levels</h2>
          <h4>Traits that show as a progress bar</h4>
        </div>
        <div class="file_zone">
          <input type="file" name="contents"></input>
        </div>
      </div>

      <div class="property_area">
        <div class="text_zone">
          <h2>Stats</h2>
          <h4>Traits that just show as numbers</h4>
        </div>
        <div class="file_zone">
          <input type="file" name="contents"></input>
        </div>
      </div>

      <h2>Unlockable Contents</h2>
      <h4>
        Include unlockable content that can only be revealed by the owner of the
        item.
      </h4>
      <textarea
        name="unlockable"
        size="20"
        placeholder="Enter Contents."
      ></textarea>

      <h2>Supply</h2>
      <h4>The number of items that can be minted. No gas cost to you!</h4>
      <input
        type="text"
        name="Supply"
        size="20"
        class="one-line"
        placeholder="1"
      ></input>

      <h2>Blockchain</h2>
      <select name="blockchain" class="one-line">
        <option value="Ethereum">Ethereum</option>
        <option value="coin1">coin1</option>
        <option value="coin2">coin2</option>
        <option value="coin3">coin3</option>
      </select>
    </div>
  );
};

export default Fourth;
