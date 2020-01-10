import React, { useState, useEffect } from 'react'
import './Heading.css'

function Quality (props) {
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
            <h1 className="heading1">Nursing Homes with Quality Points</h1>
                <table className="mainTable">
                    <thead>
                        <tr>
                            <th>Nursing Homes</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Compliance Rating (out of 5)</th>
                            <th>Staff Rating (out of 5)</th>
                            <th>Overall Rating (out of 5)</th>
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
                <td className="tableData">{provider.health_inspection_rating}</td>
                <td className="tableData">{provider.staffing_rating}</td>
                <td className="tableData">{provider.overall_rating}</td>
            </tr>
        );  
}
export default Quality;