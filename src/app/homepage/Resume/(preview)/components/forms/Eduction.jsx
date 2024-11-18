import React from 'react'

const Eduction = ({data,setdata}) => {


    const inputChnageFN = (e,index) =>{
      const {name,value} = e.target;
        setdata((prev) => {
            return {
                ...prev,
                education: prev.education.map((item)=>{
                    if(item.id == index){
                        return {...item, [name] : value}
                    }else{
                       return item
                    }
                })
            };
        });
      }


      const addEducationFn = ()=>{
        const newdata = {
            id: data.education.length + 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: ''
            
        }
     
         setdata((prev) => {
            return {
                ...prev,
                education: [
                    ...prev.education,
                    newdata
                ]
            };
        });
        
      }

const RemoveEductionFn = (index)=>{
    const newItems = [...data.education];
    const indexof = newItems.findIndex((item)=> item.id == index)
    newItems.splice(indexof, 1);

    setdata((prev) => {
        return {
            ...prev,
            education: newItems
        };
    });
}

  return (
    <div>
{
  data.education?.length > 0 &&  data.education?.map((item)=>{
    return <div key={item.id}>
        <h4>Education Number {item.id}</h4>
        <button style={{background : 'blue'}} onClick={()=>RemoveEductionFn(item.id)}>Remove Exprience</button>
  <input value={item.universityName} name='universityName' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.startDate} name='startDate' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.endDate} name='endDate' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input value={item.degree} name='degree' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <input type='text' value={item.major} name='major' onChange={(e)=>inputChnageFN(e,item.id)}/>
  <textarea cols={50} rows={5} value={item.description} name='description' onChange={(e)=>inputChnageFN(e,item.id)}/>
    </div>
    })
}
 
 <button style={{background : 'blue'}} onClick={addEducationFn}>Add Experience</button>
    </div>
  )
}

export default Eduction