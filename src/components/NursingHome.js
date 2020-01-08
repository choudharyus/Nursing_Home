import React, { useEffect, useState } from "react"
import './NursingHome.css'
const NursingHome = () => {
const [nursingHome, setNursingHome] = useState([]);

useEffect (() => {
    fetch ('https://data.medicare.gov/resource/4pq5-n9py.json')

        .then(res => res.json())
        .then(res => {
            //console.log(res)
            setNursingHome(res)
        })
        }, [])
    return (
        <div>
            
        <h1>This is an API call page for Nursing Homes!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>

                <tbody>
                    {nursingHome.map((p, index) => {
                        return <Tr key={index} provider= {p} />
                    })}
                </tbody>

            </table>
        </div>
    );
}

const Tr = ({provider}) => {
    return (
        <tr>
            <td>{provider.provider_name}</td>
            <td>{provider.provider_address}</td>
            <td>{provider.provider_city}</td>
            <td>{provider.provider_state}</td>
            <td>{provider.provider_zip_code}</td>
        </tr>
    );    
}
export default NursingHome;
