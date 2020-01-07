import React, { useState, useEffect } from 'react';

let List = (props) => {
    let [list, setList] = useState([])

useEffect (() => {
    setList([props])
   
}, [])

console.log(list.map(item => (item.provider_type)))


    return (
        
        <div>
           
        </div>
    )
}
export default List;