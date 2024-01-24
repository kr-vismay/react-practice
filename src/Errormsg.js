import React from 'react';
function Errormsg({items}){
return(
    <>
     {items.length===0?<h1>i'm hungry</h1>:null}
</>
);
}
export default Errormsg;