import React from 'react'

const Experience = ({data,setdata}) => {


    const inputChnageFN = (e,index) =>{
      const {name,value} = e.target;
        setdata((prev) => {
            return {
                ...prev,
                experience: prev.experience.map((item)=>{
                    if(item.id == index){
                        return {...item, [name] : value}
                    }else{
                       return item
                    }
                })
            };
        });
      }


      const addExpreienceFn = ()=>{
        const newdata = {
            id: data.experience.length + 1,
            title: "",
            companyName: "",
            city: "",
            state: "",
            startDate: "May 2019",
            endDate: "Jan 2021",
            currentlyWorking: false,
            workSummary: ""
            
        }
     
         setdata((prev) => {
            return {
                ...prev,
                experience: [
                    ...prev.experience,
                    newdata
                ]
            };
        });
        
      }

const RemoveExpreienceFn = (index)=>{
    const newItems = [...data.experience];
    const indexof = newItems.findIndex((item)=> item.id == index)
    newItems.splice(indexof, 1);

    setdata((prev) => {
        return {
            ...prev,
            experience: newItems
        };
    });
}

  return (
    <div>
{
  data.experience?.length > 0 &&  data.experience?.map((item)=>{
    return <div key={item.id}>
        <h4>Experience Number {item.id}</h4>
        <button style={{background : 'blue'}} onClick={()=>RemoveExpreienceFn(item.id)}>Remove Exprience</button>
  <input value={item.title} name='title' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.companyName} name='companyName' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.city} name='city' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.state} name='state' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input type='text' value={item.startDate} name='startDate' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <textarea cols={50} rows={5} value={item.workSummary} name='workSummary' onChange={(e)=>inputChnageFN(e,item.id)}/>
    </div>
    })
}
 
 <button style={{background : 'blue'}} onClick={addExpreienceFn}>Add Experience</button>
    </div>
  )
}

export default Experience