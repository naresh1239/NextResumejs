'use client'; 
import React, { useState ,useEffect} from 'react'
import Preview from './Preview'
import Personal from '../(preview)/components/forms/Personal'
import styles from "./style.module.css";
import Experience from '../(preview)/components/forms/Experience';
import Eduction from '../(preview)/components/forms/Eduction';
import Skills from '../(preview)/components/forms/Skiils';
import { usePDF } from 'react-to-pdf';
import { useParams } from 'next/navigation'
import { saveResume } from './SaveResume';
import Loader from '../(preview)/components/Loader';
import {fetchData} from "./GetResume"
const page = () => {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const [data, setdata] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const id = useParams();

    useEffect(() => {
      fetchData(id,setdata,setisLoading); 
    }, []);

    const [index, setindex] = useState(1)

  return (
    <>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => toPDF()}>Download PDF</button>
      &nbsp;
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>saveResume(data,setisLoading)}>Save</button>
     {isLoading && <Loader/>} 
    <div className={styles.main}>
    
        {
            index == 1 && <Personal data={data} setdata={setdata}  />
        }
        {
             index == 2 && <Experience data={data} setdata={setdata}  />
        }
        {
             index == 3 && <Eduction data={data} setdata={setdata}  />
        }
        {
             index == 4 && <Skills data={data} setdata={setdata}  />
        }
        <Preview data={data} setindex={setindex} targetRef={targetRef}/>


  
    </div>
    </>
  )
}

export default page