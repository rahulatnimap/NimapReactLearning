import React, { useState } from 'react'

const PropDisplay = (prop) => {
    const [toggle , setToggle] = useState(false)

    function handleToggle(){
        !toggle ? setToggle(true) : setToggle(false)
    }

    console.log(prop.data);
    
    return (
        <div>
          {prop.data.length !== 0 ? <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {prop.data.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.role}</td>
                  <td>{ele.age}</td>
                </tr>
              ))}
            </tbody>
          </table> : <h1>No Data Found</h1> }

          <button onClick={handleToggle} style={{backgroundColor : toggle ? 'green' : 'red'}}>Toggle</button>
          {toggle ? <h1>YES</h1> : <h1>NO</h1>}
        </div>
      );
}

export default PropDisplay