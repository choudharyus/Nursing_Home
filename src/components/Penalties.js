import React, { useState, useEffect } from 'react';
import './Heading.css'

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
            <h1 className='heading1'>Nursing Homes with Penalties & Fines</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nursing Homes</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Number of Complaints</th>
                            <th>Reported Incidents</th>
                            <th>Fines in ($)</th>
                            <th>Total # of Penalties</th>
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
                <td className="tableData">{provider.rating_cycle_1_number_of_complaint_health_deficiencies}</td>
                <td className="tableData">{provider.number_of_facility_reported_incidents}</td>
                <td className="tableData">{provider.total_amount_of_fines_in_dollars}</td>
                <td className="tableData">{provider.total_number_of_penalties}</td>
            </tr>
        );    
    }
export default Penalties;