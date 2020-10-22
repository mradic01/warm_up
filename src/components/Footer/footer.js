import React from 'react'
import classes from './footer.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

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
      <ul className={classes.navigation}>
          {navTabs.map(tab =>
            <li>{tab}</li>)
          }
      </ul>
  </footer>
)

export default Footer