import React, { useState, useEffect } from 'react';
//import List from './list'

const Penalties = () => {
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
            <h1>Total Penalties API Call!</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Total Penalties</th>
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
                <td>{provider.total_number_of_penalties}</td>
            </tr>
        );    
    }
export default Penalties;