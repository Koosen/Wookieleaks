/** 
3. React API Request (Table)

This will test your knowledge on React, fetching and manipulate data from an open API 
and creating a layout using JSX and CSS. Go to https://swapi.dev/ and have a quick look 
through the documentation to familiarise yourself. This is a free Star Wars API that returns 
JSON data to build your applications.

Write a React component to render a table of starships with paging. React should 
be the only import. The fetch API can be used to request data from the API. Build a HTML table 
based on the starships from the movies, which has the following headers:
Name
Model
Crew
The values of the cells should be the corresponding values from the API response. If there is
missing data for a given cell render a hyphen.
The table should be composed of 10 rows (plus one row for the headers), and it should have 2 
buttons for the pagination(<Prev, Next>). If there are no previous or next pages then these 
buttons should be disabled.
Please add some styles to the table (headers should be a different colour and rows alternated).

4. Bonus: Extending the Table
Add a fourth column to the table from 3, showing the names of the pilots of the starship as a comma-separated string.
*/
import React, { useEffect, useState } from "react"

interface Ship {
    name: string
    model: string
    crew: string
}

async function getShips(page:number){
    let response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    let data = await response.json();

    return data;
}

function ShipTable(){
    const [shipData, setShipData] = useState<Ship[]>([]);
    const [page, setPage] = useState<number>(1)

    useEffect(()=>{
        getShips(page).then((res)=>{
            setShipData(res.results)
        })
    }, [page])

    const updatePage = (mod:number) => {
         setPage(page + mod === 0 ? 1 : page + mod)
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Crew</th>
                </tr>
                {shipData.map((ship, key) => {
                    return (
                        <tr key={key}>
                            <td>{ship.name}</td>
                            <td>{ship.model}</td>
                            <td>{ship.crew}</td>
                        </tr>
                    )
                })}
            </table>
            <div>
                <button onClick={() => updatePage(-1)}>Previous</button>
                <button onClick={() => updatePage(1)}>Next</button>
            </div>
            
        </div>
    )
}

export default ShipTable