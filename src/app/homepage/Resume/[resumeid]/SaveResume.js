export const saveResume = async(data,setisLoading)=>{
     try {
      setisLoading(true)
       const response = await fetch(`http://localhost:8080/api/SaveResume?id=${data._id}`,{
         method : "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({data,orderby : []}),
       }); // Replace with your API endpoint
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const result = await response.json();
      setisLoading(false)

        // Parse the JSON from the response
       // setdata(result); // Update state with fetched data
     } catch (err) {
      
       console.log(err); // Update error state if there’s an error
   };
 }