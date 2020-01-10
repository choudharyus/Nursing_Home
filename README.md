# Nursing_Home

<!-- ![](https://data.medicare.gov/resource/4pq5-n9py.json)
<--- me coding this app! -->

## Project Description

I picked the URL from USDA/FDA about the nursing home availbility in the area. It has been challenged for the families to find the right nursing home for their loved ones. My plan to design the site that provide the families quick access to the basic information about the nursing home such as; Number of beds (capacity) of the nursning home, Quality star rating of the nursing home, Number of nursing home available in the area, Total number of penalities, violations or fines of the nursing home.

## Project Links

- [github repo](https://github.com/choudharyus/Nursing_Home)
<!-- - [deployment]() -->

## Wireframes

- [Initial Wireframe](https://github.com/choudharyus/Nursing_Home/blob/master/public/Wireframe-Diagram-Project2.png)
	- this is my initial thinking of how I want my page to work.
<!-- - [react architecture]() -->

Define the the React components and the architectural design of your app.

### MVP/PostMVP

#### MVP
- Find an external API for Nursing Home data
- Develop an app that displays the info and can be interacted with
- Create links to each category such as list of nursing homes, penalties & violations, quality, capcity, about and disclaimer
- Create pages to display detail info for each above mentioned cartegory

### PostMVP
- Found an API and successfully retrieved the data
- Created at least six different functional components for the project
- linked the components with the component containing the Router/Navigation functionality
- Made sure all the components working fine and showing the expected results
- Made sure data is appropriately orgranized and in the readable format
- Provided styling to to the display page for clarity and asthetic touch

## Components

| Component | Description | 
| --- | :---: |  
| Home | This will make the initial data pull and include React Router| 
| NursingHome | This will render the complete list of runsing homes with names, addresses, states & zipcode | 
| Penalities | This will render the nursing homes with fines and penalities | 
| Capacity | This will render the list of nursing homes with their capacity of residents | 
| Quality | This will render the nursing homes with their quality rating points | 
| About | This will render the info about the developer, GA staff and the objective of the site |
| Disclaimer | This will render the disclaim stating the data is purely used for educational purpose | 

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 4hrs | 4hrs | 4hrs |
| Create all initial files and initial React setup | H | 4hrs | 4hrs | 4hrs |
| Connect to API and show it responding | H | 2hrs | 2hrs | 3hrs |
| Develop code for App | H | 2hrs | 2hrs | 6hrs |
| Develop code for Header and Main | H | 8hrs | 8hrs | 6hrs |
| Develop code for qutalities, penalities, and capacity | H | 8hrs | 8hrs | 8hrs |
| Stylize the app | H | 8hrs | 8hrs | 10hrs |
| Work on final documentation | H | 4hrs | 4hrs | 4hrs |
| Total | H | 40hrs | 40hrs | 45hrs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.  -->

## Code Snippet

I didn't have any problem fetching data from API and dumping into the array format. The biggest challenge was to properly handle the data in the most organized formt (Table formt); in order to accomplish this task I did online research and found couple of directions from "stackoverflow" site. I successfully applied the knowledge and was able to display the data in the table formt.
```
import React, { useEffect, useState } from "react"
import './NursingHome.css'
import './Heading.css'

const NursingHome = () => {
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
            
        <h1 className="heading1">List of Nursing Homes</h1>
            <table className="mainTable">
                <thead>
                    <tr>
                        <th>Nursing Homes</th>
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
            <td className="tableData">{provider.provider_state}</td>
            <td className="tableData">{provider.provider_zip_code}</td>
        </tr>
    );    
}
export default NursingHome;
```

## Issues and Resolutions

**ERROR**:  Table to orgranize the data was not working properly. 
**RESOLUTION**: One of the challenge I had during this project to display the data in the table format. I reasearched the solution online and consulted different sites to identify the righ approach to handle the output.
```

<!-- #### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object -->
