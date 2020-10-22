import React from "react"
import contactBar from "../components/ContactBar/ContactBar";
//import { Link } from "gatsby"

import Aux from '../hoc/auxiliary/auxiliary';
import ContactBar from '../components/ContactBar/contactBar';
import NavigationHeader from '../components/NavigationHeader/navigationHeader';

const IndexPage = () => (
  <Aux>
    <ContactBar/>
    <NavigationHeader/>
  </Aux>
)

export default IndexPage;
