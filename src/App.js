import { Route, Routes } from "react-router-dom";
import "./App.css";
import Second from "./pages/Second";
import CreateNFT from "./pages/CreateNFT";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import PostPage from "./pages/PostPage";
import SideBar from "./SideBar";
import ContentList from "./ContentList";
import ContentListArt from "./ContentListArt";
import ContentListPhoto from "./ContentListPhoto";
import ContentListMusic from "./ContentListMusic";
import ContentListVideo from "./ContentListVideo";

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
