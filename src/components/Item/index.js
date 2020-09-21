import React from 'react';

import addItemIcon from '../../assets/images/icons/add_icon.svg';
import './styles.css';

export default class Item extends React.Component {
  render() {
    return (
      <>
        <div id="item-component">
          <span className="">{label}</span>
          <button className="button-add-item" value={value}>
            <img src={addItemIcon} alt="Adicionar este item" />
          </button>
        </div>
      </>
    );
  }
}
