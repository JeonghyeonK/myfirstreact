import { Route, Routes } from "react-router-dom";
import "./App.css";
import Second from "./pages/Second.js";
import CreateNFT from "./pages/CreateNFT.js";
import Fourth from "./pages/Fourth.js";
import Fifth from "./pages/Fifth.js";
import PostPage from "./pages/PostPage.js";
import SideBar from "./SideBar.js";
import ContentList from "./ContentList.js";
import ContentListArt from "./ContentListArt.js";
import ContentListPhoto from "./ContentListPhoto.js";
import ContentListMusic from "./ContentListMusic.js";
import ContentListVideo from "./ContentListVideo.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContentList />} />
        <Route path="/first" element={<ContentList />} />
        <Route path="/second" element={<Second />} />
        <Route path="/create-nft" element={<CreateNFT />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/contentlist/art" element={<ContentListArt />} />
        <Route path="/contentlist/photo" element={<ContentListPhoto />} />
        <Route path="/contentlist/music" element={<ContentListMusic />} />
        <Route path="/contentlist/video" element={<ContentListVideo />} />

        <Route path="/postpage" element={<PostPage />} />
      </Routes>
      {/* <ContentList /> */}
    </div>
  );
}

export default App;
