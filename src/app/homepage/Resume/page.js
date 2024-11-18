import Link from 'next/link'
import React from 'react'
import GerateFrom from './[resumeid]/GerateFrom';
import TypewriterEffect from './TypewriterEffect';

const page = async() => {
  const response = await fetch('http://localhost:8080/api/AllResumes'); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json(); // Parse the JSON data
 let text =  "The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book De Finibus Bonorum et Malorum, written in 45 BC, to create filler text. The textbecame popular among printers and typesetters because it provided a standard dummy text that could be used to showcase different fonts, layouts, and designs without the distraction of meaningful content.In the 1960s, the popularity of Lorem Ipsum increased with the release of Letraset character transfer sheets that included passages of the text. Since then, it has become even more widely used in the design and printing industry, particularly with the advent of desktop publishing software such as Aldus PageMaker, Pages and Microsoft Word, which include versions of the Lorem Ipsum text."
  return (
    <div>
        page 
        {
          data.map((item)=>{
            return <Link href={`Resume/${item._id}`}>Go to resume</Link>
          })
        }
         <GerateFrom/>
         <TypewriterEffect text={text} speed={10}/>
    </div>
  )
}

export default page