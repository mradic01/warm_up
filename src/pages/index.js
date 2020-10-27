import React from "react"
import contactBar from "../components/ContactBar/ContactBar";
//import { Link } from "gatsby"

import Aux from '../hoc/auxiliary/auxiliary';
import NavigationHeader from '../components/NavigationHeader/navigationHeader';
import Footer from "../components/Footer/footer";

const IndexPage = () => (
  <Aux>
    <NavigationHeader/>
    <Footer/>
  </Aux>
)

export default IndexPage;
