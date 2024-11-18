'use client'
import React, { useEffect, useState } from 'react'

const Form = () => {
  const [IsEditing, setIsEditing] = useState(false)
    const funnyTextArray = [
        "Not today, procrastination!",
        "I could agree with you, but then we’d both be wrong.",
        "404: Motivation not found.",
        "BRB, saving the world.",
        "I’m on a seafood diet. I see food and I eat it.",
        "My bed is a magical place where I suddenly remember everything I forgot to do.",
        "I'm not lazy, I'm on energy-saving mode.",
        "Can’t adult today. Please don’t make me.",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "I’m not arguing, I’m just explaining why I’m right."
      ];

   const [tastName,setTaskName] = useState({
    name : '',
    age : '',
    type : '',
    model : ''
   })
   const [tasks,setTasks] = useState([])

   const changeEvent = (event)=>{
    const {name,value} = event.target
    setTaskName((perv)=> ({...perv,[name] : value}))
   }

   const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/task');
      const data = await res.json();
      setTasks(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   const handleCreateTask = async () => {
    const response = await fetch('http://localhost:8080/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tastName),
      });

      fetchData()
   };

   const handleEditTask = async () => {
    const response = await fetch('http://localhost:8080/api/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tastName),
      });

      fetchData()
      setIsEditing(false)
   };

   const handleDeleteTask = async (id) => {
    const response = await fetch('http://localhost:8080/api/Delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id : id}),
      });

      fetchData()
   };

   useEffect(() => {
    fetchData();
  }, []);
   

  const IsEditingFn = (EditItem,key) =>{
    setTaskName({...EditItem})
    setIsEditing(true)
    
  }
  return (
    <div>
        <input name='name' type='text' value={tastName.name} placeholder='add you task' onChange={changeEvent}/>
        <input name='age' type='number' value={tastName.age} placeholder='add you task' onChange={changeEvent}/>
        <select value={tastName.type} name='type' onChange={changeEvent}>
            {
                funnyTextArray.map((item,key)=>{
                    return  <option key={key}>{item}</option>
                })
            }
        </select>
        <input name='model' type='number' value={tastName.model} placeholder='add you task' onChange={changeEvent}/>
        {!IsEditing ?
        <button onClick={()=>{
             handleCreateTask()
            setTaskName({
                name : '',
                age : '',
                type : '',
                model : ''
               })
        }}>Add Task</button>
        :
        <button onClick={()=>{
          handleEditTask()
            setTaskName({
                name : '',
                age : '',
                type : '',
                model : ''
               })
        }}>Edit Task</button>
      }
        <div>
  
           {
            tasks.map((item,key)=>{
                return <div key={key} style={{background : 'yellow', margin : '10px'}}>
                    <button onClick={()=>IsEditingFn(item,key)}>🦠Edit</button>
                    <br/>
                    <button onClick={()=>handleDeleteTask(item._id)}>Delete</button>
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.type}</p>
                    <span>{item.model}</span>
                    </div>
            })
           }
        </div>
    </div>
  )
}

export default Form