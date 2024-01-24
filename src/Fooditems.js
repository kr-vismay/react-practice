import React from 'react';
import Item from './Item';
function Fooditems({items}){
return(
    <>
    <ul>
    <Item itemsName = {items}/>
    </ul>
    </>
    );
}

export default Fooditems;