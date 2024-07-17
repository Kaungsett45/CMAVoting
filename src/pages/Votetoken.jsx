import React from 'react'

import { useEffect , useState} from 'react';
export default function Votetoken({tokenform , ShowToken}) {
  
  const [votedata, setvotedata] = useState([]);
  useEffect(() =>{

    const fetchData= async ()=>{

      try{
        const res = await fetch('http://localhost:8080/votetoken');

        const result = await res.json();
        setvotedata(result);
      }catch(error){
        console.error('Error fetching data ',error);
      }
    };
    fetchData();
  }, []);
  
 
 
  return (
    <div className='fixed bg-[#1A8B9C] rounded-lg  inset-x-[420px] h-[200px]'>
      
    <div className='mx-4 flex justify-between items-center'>
          <h3 className='text-center text-white font-xl py-3'>List Of Vote Token</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white cursor-pointer" onClick={ShowToken}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </div>


      <div>
      <ul className='flex flex-wrap  px-6 mx-8'>
        {votedata.map(item =>(
          
            <li key={item.vote_id} className='mx-3 w-[120px] bg-white my-1 px-2 text-center rounded-lg'> {item.votetoken}</li>
         
        ))}
         </ul>
      </div>
         

    </div>
  )
}
