'use client'; 
import React, { useState ,useEffect} from 'react'
import Loader from '../(preview)/components/Loader';
const GerateFrom = () => {
    const [TextAreaData, setTextAreaData] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const RegerateAi = async() =>{
        setisLoading(true)
        try {
           const response = await fetch(`http://localhost:8080/api/gerateApi`,{
             method : "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({data : TextAreaData}),
           }); // Replace with your API endpoint
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const result = await response.json();
              // setoutput(result)
              console.log(result)
        setisLoading(false)

            //   setdata(result)
            // Parse the JSON from the response
           // setdata(result); // Update state with fetched data
         } catch (err) {
        setisLoading(false)
          
           console.log(err); // Update error state if there’s an error
       }
      }

 if(isLoading) return <Loader/>
 
  return (
    <div>
          <textarea rows={10} cols={50} value={TextAreaData} onChange={(e)=>setTextAreaData(e.target.value)}/>
          <button onClick={RegerateAi}>Regerate</button>
    </div>
  )
}

export default GerateFrom