import React from 'react'
 
import classes from './comboboxItem.module.css'
 
const ComboboxItem = ({language, name, flag, setSelected, selected}) => (
    <li key={name}
    onClick={() => setSelected({name, language})}
    className={`${classes.comboboxItem} ${selected ? classes.selected : ''}`} >
        <span>{language}</span>
        <img src={flag} alt={name} />
    </li>
)
 
export default ComboboxItem