import React from 'react';

import './styles.css';
import Item from '../Item';

const ItemList = (props) => {

    return (
        <div id="item-list-component">
          {
            props.types.map(type => {
              return (
                <fieldset key={type.name}>
                  <legend>
                    {type.name}
                  </legend>
                  
                    {
                      type.list.map((item, index) => {
                        return <Item key={index} item={item} />
                      })
                    }
                  
                  
                </fieldset>
              )
            })
          }
        </div>
  );
  }

export default ItemList;


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