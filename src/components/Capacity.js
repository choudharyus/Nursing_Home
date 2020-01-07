import React, { useState, useEffect } from 'react'

function Capacity (props) {
const [ initialData, setInitialData] = useState([props])

setInitialData()
//console.log(initialData)


return (
    <div>
        {initialData}
    </div>
)

}
export default Capacity;