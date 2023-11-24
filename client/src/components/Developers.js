import React from 'react'

function Developers() {

  let getDataFromServer = async ()=>{

    let reqOpt ={

      method:"GET"

    }
    let JSONData = await fetch("http://localhost:1917/engineers",reqOpt);
    let JSOData = await JSONData.json();
    console.log(JSOData);

  }
  

  return (
    <div>
      <button onClick={()=>{
getDataFromServer();
      }}>GEt Data</button>

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {}
  </tbody>
  <tfoot></tfoot>
</table>


    </div>
  )
}

export default Developers