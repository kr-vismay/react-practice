import React from 'react';
function Item({itemsName}){
return(
    <>
    {itemsName.map((val)=>(<li>{val}</li>))}
    </>
    );
}
export default Item;
