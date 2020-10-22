import React from "react"
import contactBar from "../components/ContactBar/ContactBar";
//import { Link } from "gatsby"

import Aux from '../hoc/auxiliary/auxiliary';
import ContactBar from '../components/ContactBar/contactBar';
import NavigationHeader from '../components/NavigationHeader/navigationHeader';
import Footer from "../components/Footer/footer";

const IndexPage = () => (
  <Aux>
    <ContactBar/>
    <NavigationHeader/>
    <Footer/>
  </Aux>
)

export default IndexPage;
