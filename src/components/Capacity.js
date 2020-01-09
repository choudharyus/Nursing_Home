import React, { useState, useEffect } from 'react'
import './Heading.css'

function Capacity (props) {
    const [nursingHome, setNursingHome] = useState([]);
    
    useEffect (() => {
        fetch ('https://data.medicare.gov/resource/4pq5-n9py.json')
    
            .then(res => res.json())
            .then(res => {
                setNursingHome(res)
            })
        }, [])
    
        return (
            <div>
            <h1 className="heading1">Nursing Homes with Capacity of Residents</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nursing Homes</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Total Number of Residents in Each Facility</th>
                            <th>Total Number of Certified Beds</th>
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
                <td className="tableData">{provider.provider_state}</td>
                <td className="tableData">{provider.provider_zip_code}</td>
                <td className="tableData">{provider.number_of_residents_in_certified_beds}</td>
                <td className="tableData">{provider.number_of_certified_beds}</td>
            </tr>
        );  
}
export default Capacity;