import React from 'react';

import './styles.css';
//import Item from '../Item';

export default class ItemList extends React.Component {
  constructor(props) {

  }

  render() {

    return (
      <>
        <div id="item-list-component">
          {/*
            options.map((option, index) => {
              return (
                <fieldset key={index}>
                  <legend>
                    {option.legend}
                  </legend>
                  { option.arrayItems.map((item, index) => {
                    return <Item key={ index } label={item.name} value={item.id} />
                  }) }
                </fieldset>
              )
            })
          */}
        </div>
      </>
  );
  }
}


/*
{
              items.map(item => {
                return <Item 
                        key={ item.id } 
                        label={ item.name } 
                        value={ item.name } 
                      />
              })
            }
*/ 