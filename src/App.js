import React from 'react';
import './App.css';
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar";
import Articles from "./Components/Articles/Articles";
import Otzivi from "./Components/Otzivi/Otzivi";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <TopBar />
            <NavBar />
            <Articles />
            <MainContent />
            <Otzivi />
            <Footer />
        </div>
    )
}

export default App;
