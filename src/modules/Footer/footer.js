import React from 'react'

import classes from './footer.module.css'

import NavigationBar from '../../components/Navigation/NavigationBar/navigationBar';

const Footer = () => (
  <footer className={classes.footer}>
      <ul className={classes.address}>
          <li className={classes.title}>
              VILA OLIVA VERDE
          </li>
          <li>Štrped 24</li>
          <li>521000 Vinkuran</li>
          <li className={classes.phone}>
              +385 99 11223344
          </li>
          <li>example@email.com</li>
      </ul>
      <NavigationBar useThisStyle/>
  </footer>
)

export default Footer