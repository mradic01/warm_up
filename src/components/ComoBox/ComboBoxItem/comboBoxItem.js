import React from 'react'
 
import classes from './comboboxItem.module.css'
 
const ComboboxItem = ({language, name, flag}) => (
    <div key={name}
    className={classes.comboboxItem}>
        <span>{language}</span>
        <img src={flag} alt={name} />
    </div>
)
 
export default ComboboxItem