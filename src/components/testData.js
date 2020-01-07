import React, { useState, useEffect } from 'react'

function ImportData (props) {
const [ initialData, setInitialData] = useState([])

useEffect(() => {
    setInitialData(props)
}, [])


return (
    <div>
        
    </div>
)

}
export default ImportData;