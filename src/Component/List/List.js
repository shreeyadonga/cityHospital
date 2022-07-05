import React from "react";

function List({data}) {
    let filterdata = data.filter((value,index)=>value.expiry > 2021);
    const total = filterdata.reduce(
     (acc, value, index)=>acc+value.price, 
     0);
    
   return (
       <table width="600px" align="center" cellSpacing="0" cellPadding="0" className='my-4'>
           <tr>
             <th className='text-center'>ID</th>
             <th className='text-center'>NAME</th>
             <th className='text-center'>QUANTITY</th>
             <th className='text-center'>PRICE</th>
             <th className='text-center'>EXPIRY</th>
             <th className='text-center'>TOTAL</th>
           </tr>
           { 
           
          filterdata.map((d, i) => {
            
            return ( 
              <tr key={i}> 
                <td className='text-center'>{d.id}</td> 
                <td className='text-center'>{d.name}</td> 
                <td className='text-center'>{d.quantity}</td> 
                <td className='text-center'>{d.price}</td> 
                <td className='text-center'>{d.expiry}</td>
                {i === 2 ? <td className='text-center' colspan="3">{total}</td> : null} 
              </tr> 
            ) 
          }) 
        } 
           
       </table>
   );
}

export default List;