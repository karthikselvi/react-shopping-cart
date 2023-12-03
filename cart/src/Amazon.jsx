import React from 'react';
import list from './Data';
import './amazon.css';
import Card from './Card';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Card item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon