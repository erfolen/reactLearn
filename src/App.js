import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Articles from "./Components/Articles/Articles";
import Subcribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
           <Articles />
            <div className="app-wrapper-content">
                <Route exact path='/' render={() => <MainContent />}/>
               {/* <Route path='/o-nas' render={()=><Onas />} />
              <Route path='/poleznai-information' render={()=><PoleznaiInformation />} />
              <Route path='/stoimost' render={()=><Stoimost />} />
              <Route path='/uslugi' render={()=><Uslugi />} />
              <Route path='/obratnai-svaiz' render={()=><ObratnaiSvaiz />} />
              <Route path='/kontakt' render={()=><Kontakt />} />
              <Route path='/trotuarnai-plitka' render={()=><TrotuarnaiPlitka />} />
              <Route path='/vodostoki-gelob' render={()=><VodostokiGelob />} />
              <Route path='/krishki' render={()=><Krishki />} />
              <Route path='/bordurnii-kamen' render={()=><BordurniiKamen />} />
              <Route path='/zabor' render={()=><Zabor />} />*/}
            </div>
            <Subcribe />
            <Footer />
        </div>
    )
}

export default App;
