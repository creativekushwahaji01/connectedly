import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivateComponent from "./Components/PrivateComponents";
import AuthForm from "./Components/Authform";
import Home from "./Components/Home";
import CommunityPartnerComponent from "./Components/Communitypartner";
import News from "./Components/News";
import NewsAddingComponent  from "./Components/AddNewsComponent";
import Event from "./Components/Events";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Private routes */}
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/events" element={<Event/>} />
            <Route path="/comunitypartners" element={<CommunityPartnerComponent/>} />
            <Route path="/members" element={<h1>members</h1>} />
            <Route path="/addinfo" element={<NewsAddingComponent/>} />
            {/* <Route path="/logout" element={<h1>Logout listing component</h1>} /> */}
            <Route path="/profile" element={<h2>Profile</h2>} />
          </Route>
          <Route path="/Authform" element={<AuthForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
