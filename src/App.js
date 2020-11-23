import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from "./component/search";
import  NavbarPage from "./component/sideBar";
import InputPage from "./component/criminalrecord";
import BasicTable from "./component/searchResult";
import FormPage from "./component/contactus";




const CarouselPage = () => {
  return (
    <MDBContainer>  
       
      <Router>
              <Route path="/" exact component={SearchPage} />
              <Route path="/contact" exact component={FormPage} />
              <Route path="/basic" exact component={BasicTable} />
              <Route path="/criminal" exact component={InputPage} />

      </Router>
      
     
      
    </MDBContainer>
  );
}

export default CarouselPage;