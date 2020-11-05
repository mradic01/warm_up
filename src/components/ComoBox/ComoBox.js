import React, { useState, useEffect } from 'react';

import { languages } from '../../Constants/Constants';
import classes from './comoBox.module.css';
import ComboboxItem from './ComboBoxItem/comboBoxItem';

const ComboBox = () => {

  const [selectedItem, setSelectedItem] = useState(
    languages.find(el => el.name === "eng"));
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.combobox} onClick={() => setOpen(!open)}>
      {<ul style={{ display: open ? 'flex' : 'none' }}>
        {languages.map(el =>
          <ComboboxItem {...el}
            setSelected={setSelectedItem}
            selected={el.name === selectedItem.name}
          />)}
      </ul>}
      {selectedItem.language}
    </div>
  )
}

export default ComboBox;