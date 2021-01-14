import React from "react";
import {Route} from "react-router-dom";

const MainContent = () => {
    return (
        <div>
           MainContent
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
    )
}

export default MainContent;