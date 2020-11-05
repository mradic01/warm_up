import React from 'react';

import { languages } from '../../Constants/Constants';
import classes from './comoBox.module.css';
import ComboboxItem from './ComboBoxItem/comboBoxItem';

const comoBox = () => (
    <div className={classes.combobox}>
      {<ul>
          {languages.map(el => 
          <ComboboxItem {...el} />)}
       </ul>
      }
    </div>
);

export default comoBox;