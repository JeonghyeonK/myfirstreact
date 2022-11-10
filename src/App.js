import { Route, Routes } from "react-router-dom";
import "./App.css";
import Second from "./pages/Second";
import CreateNFT from "./pages/CreateNFT";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";
import PostPage from "./pages/PostPage";

import ContentList from "./ContentList";

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

        <Route path="/postpage" element={<PostPage />} />
      </Routes>
      {/* <ContentList /> */}
    </div>
  );
}

export default App;
