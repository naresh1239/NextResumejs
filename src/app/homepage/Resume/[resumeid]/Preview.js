'use client'
import React, { useState,useEffect, useRef } from 'react';

import {UsecustomCss} from "./UsecustomCss"

import RatingType from '../(preview)/components/forms/RatingType';

const Preview = ({data,setindex,targetRef}) => {


  const styles = UsecustomCss(data)

  const [items, setItems] = useState([]);

  useEffect(() => {
  setItems([
    { id: 1, name:  
    <div style={styles?.summary}>
    <h2 style={styles?.sectionTitle}>Summary</h2>
    <p style={{color : data.FontColor }}>{data.summary}</p>
    </div> 
    },
    { id: 2, name: 
        <div>
        <h2 style={styles?.sectionTitle}>Experience</h2>
        {data?.experience?.map((job) => (
          <div key={job.id} style={styles?.listItem}>
            <h3 style={{color : data.FontColor }}>{`${job.title} at ${job.companyName}`}</h3>
            <p style={{ fontSize: '14px', color: data.themeColor }}>{`${job.city}, ${job.state} | ${job.startDate} - ${
              job.currentlyWorking ? 'Present' : job.endDate
            }`}</p>
            <p style={{ lineHeight: '1.6', fontSize: '15px',color : data.FontColor }}>{job.workSummary}</p>
          </div>
        ))}
      </div>
     },
    { id: 3, name: 
        <div>
        <h2 style={styles?.sectionTitle}>Education</h2>
        {data?.education?.map((edu) => (
          <div key={edu.id} style={styles?.listItem}>
            <h3 style={{color : data.FontColor }}>{`${edu.degree} in ${edu.major}`}</h3>
            <p style={{ fontSize: '14px', color: data.themeColor }}>{`${edu.universityName} | ${edu.startDate} - ${edu.endDate}`}</p>
            <p style={{ lineHeight: '1.6', fontSize: '15px',color : data.FontColor  }}>{edu.description}</p>
          </div>
        ))}
      </div>
     },
    { id: 4, name: 
        <div>
        <h2 style={styles?.sectionTitle}>Skills</h2>
        <div style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          gap: '35px',
          flexWrap: 'wrap',
          color : data.FontColor 
        }}>
  
       <RatingType data={data} styles={styles}/>
        </div>
      </div>
     },
  ])
  }, [data])
  

  // useEffect(() => {
  //  setTimeout(() => {
  //   if(items && data){
  //     console.log(data.orderby.map(index => index - 1))
  
  //      setItems(data.orderby.map(index => items[index - 1]))
  //    }
  //  }, 1000);
  // }, [data])
  
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    if (index !== draggingIndex) {
      const newItems = [...items];
      const draggedItem = newItems[draggingIndex];

      // Move the dragged item to the new position
      newItems.splice(draggingIndex, 1);
      newItems.splice(index, 0, draggedItem);

      setItems(newItems);
      setDraggingIndex(index); // Update the current dragging index
    }
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };
  

  

  return (
    <>
  
      
    <div style={styles?.container} ref={targetRef}>
      {/* Header Section */}
      
      <div style={styles?.header}>
        <h1 style={styles?.name}>{`${data.firstName} ${data.lastName}`}</h1>
        <p style={styles?.jobTitle}>{data.jobTitle}</p>
        <div style={styles?.contactInfo}>
          <p>{`${data.address} | ${data.phone} | ${data.email}`}</p>
        </div>
      </div>

      <div>
      {items.map((item, index) => (
        <div key={item.id} onClick={()=>setindex(item.id)} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{cursor : 'pointer',width : "100%"}} draggable  
           onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragEnd={handleDragEnd}>{item.name}</span>
        </div>
      ))}
    </div>
    </div>
</>
    
  );
};

export default Preview;
