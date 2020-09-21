import React from 'react';

import addItemIcon from '../../assets/images/icons/add_icon.svg';
import './styles.css';

const Item = (props) =>  {
    return (
      <>
        <div id="item-component">
          <span className="">{props.item}</span>
          <button className="button-add-item" value={props.item}>
            <img src={addItemIcon} alt="Adicionar este item" />
          </button>
        </div>
      </>
    );
  }

  export default Item;
