import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostCollections from "./components/PostCollections";
import { useState } from "react";
import PostListProvider from "./store/PostListStore";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="flexCont">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostCollections /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
