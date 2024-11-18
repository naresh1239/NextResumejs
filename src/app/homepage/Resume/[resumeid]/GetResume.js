 
        export const fetchData = async (id,setdata,setisLoading) => {
            setisLoading(true)
            try {
              const response = await fetch(`http://localhost:8080/api/GetResumebyid?id=${id.resumeid}`); // Replace with your API endpoint
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const result = await response.json(); // Parse the JSON from the response
              setdata(result); 
              setisLoading(false)
              // Update state with fetched data
            } catch (err) {
  
            } finally {
                 setisLoading(false)
            }
          };
  