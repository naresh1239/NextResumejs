import React from 'react'
import ReactStars from 'react-stars'
const Skills = ({data,setdata}) => {


    const inputChnageFN = (e,index) =>{
      const {name,value} = e.target;
        setdata((prev) => {
            return {
                ...prev,
                skills: prev.skills.map((item)=>{
                    if(item.id == index){
                        return {...item, [name] : value}
                    }else{
                       return item
                    }
                })
            };
        });
      }
      
      function starRatingToPercentage(starRating) {
        const maxStars = 5;
        return (starRating / maxStars) * 100;
    }
      const inputChnageFnRating = (e,index) =>{
          setdata((prev) => {
              return {
                  ...prev,
                  skills: prev.skills.map((item)=>{
                      if(item.id == index){
                          return {...item, ['rating'] : starRatingToPercentage(e)}
                      }else{
                         return item
                      }
                  })
              };
          });
        }
  

      const addExpreienceFn = ()=>{
        const newdata = {
            id: data.skills.length + 1,
            name: 'skill', 
            rating: 95 
        }
         setdata((prev) => {
            return {
                ...prev,
                skills: [
                    ...prev.skills,
                    newdata
                ]
            };
        });
        
      }

const RemoveExpreienceFn = (index)=>{
    const newItems = [...data.skills];
    const indexof = newItems.findIndex((item)=> item.id == index)
    newItems.splice(indexof, 1);

    setdata((prev) => {
        return {
            ...prev,
            skills: newItems
        };
    });
}

function convertPercentageToStars(percentage) {
  const maxStars = 5;
  const rating = (percentage / 100) * maxStars;
  return Math.round(rating * 2) / 2; // Rounds to the nearest half-star
}
  return (
    <div>
{
  data.skills?.length > 0 &&  data.skills?.map((item)=>{
    return <div key={item.id}>
        <h4>skills Number {item.id}</h4>
        <button style={{background : 'blue'}} onClick={()=>RemoveExpreienceFn(item.id)}>Remove skills</button>
        <input value={item.name} name='name' onChange={(e)=>inputChnageFN(e,item.id)}/>
        {
          data.RatingType == 1 ? 
  <input type='range' value={item.rating} name='rating' onChange={(e)=>inputChnageFN(e,item.id)}/>
       
          :
             <ReactStars
                count={5}
                name="rating"
                onChange={(e)=>inputChnageFnRating(e,item.id)}
                value={convertPercentageToStars(item.rating)}
                size={24}
                color2={'#ffd700'} />
        }

  
    </div>
    })
}
<div>
    Select you Rating Type
 {
    <select value={data.RatingType} name='type' onChange={(e)=>setdata((prev)=> ({...prev, RatingType : e.target.value}))}>
    <option value={1}>Bar</option>
    <option value={2}>Start</option>
      </select>
 }
 </div>
 <button style={{background : 'blue'}} onClick={addExpreienceFn}>Add skills</button>
    </div>
  )
}

export default Skills