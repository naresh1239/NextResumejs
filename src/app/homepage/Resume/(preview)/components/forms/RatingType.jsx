import React from 'react'
import ReactStars from 'react-stars'
const RatingType = ({data,styles}) => {
    function convertPercentageToStars(percentage) {
        const maxStars = 5;
        const rating = (percentage / 100) * maxStars;
        return Math.round(rating * 2) / 2; // Rounds to the nearest half-star
    }
  return (
    <>
        {   
        
      data.RatingType == 1 &&  data?.skills?.map((skill) => {
                return (
                    <div key={skill.id} style={styles?.listItem}>
                      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{skill.name}</span>
                      <span>&nbsp;{"" + skill.rating+ '%'}</span>
                      <div style={styles?.skillRating}>
                     
                        <div style={styles?.skillFill(skill.rating)}></div>
                      </div>
                    </div>
                  )
        })
    }
    {
        data.RatingType == 2 && data?.skills?.map((skill) => {
            return (
                <div key={skill.id} style={styles?.listItem}>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{skill.name}</span>
                <span>&nbsp;{"" + skill.rating+ '%'}</span>
         
               
               <span style={{ pointerEvents: 'none'}}>
               <ReactStars
                count={5}
                
                value={convertPercentageToStars(skill.rating)}
                size={24}
                color2={'#ffd700'} />
               </span>
            
              </div>   
              )
    })
      }
       
    </>
  )
}

export default RatingType