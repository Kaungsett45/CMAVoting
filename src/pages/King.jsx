
import React from 'react'
import { useEffect , useState} from 'react';
import '../App.css'

import Completenoti from '../pages/Completenoti'
import Formparticipant from './Formparticipant';
import Votetoken from './Votetoken';
import VotingForm from './VotingForm';


export default function King() {
 const [data, setData] =useState([]);
  const [isForm , isShowForm] = useState(false);
  const [tokenform ,Showtokenform]= useState(false);
  const [voting ,setvoting] =useState(null);
  
  const [complete, setComplete] = useState(false);

        useEffect(() =>{

          const fetchData= async ()=>{

            try{
              const res = await fetch('http://localhost:8080/king');

              const result = await res.json();
              setData(result);
            }catch(error){
              console.error('Error fetching data ' ,error);
            }
          };
          fetchData();
        }, []);
   
        let ShowForm =()=>{
          isShowForm(!isForm);
        }
        let ShowVoting =( id)=>{
          console.log('show id ' + id);
          setvoting(id);
        }
        let ShowToken =()=>{
          Showtokenform(!tokenform);
        }
        //completnotifunction
        let ShowCom =()=>{
          setComplete(!complete);
        }
  return (
    <>
    <div className='flex justify-between items-center'>
        <button  onClick={ShowForm} className="flex mx-6 my-[30px] px-1 bg-[#1A8B9C] text-white rounded-lg px-3 p-1 c-white items-center cursor-pointer w-[100px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>Create</p>
        </button>

        <button  onClick={ShowToken} className="flex mx-6 my-[30px] px-1 bg-[#1A8B9C] text-white rounded-lg px-3 p-1 c-white items-center cursor-pointer">Vote Token</button>
    </div>
    {tokenform && (
        <Votetoken tokenform={tokenform} ShowToken={ShowToken}/>
    )
    }

    {isForm && (
     
          <Formparticipant isForm={isForm} ShowForm={ShowForm}/>

        
    )}

    {complete && (
             <Completenoti ShowCom={ShowCom}/>    
      )}

    <div className='flex flex-wrap '>
      {data.map(item =>(
    <div className='participant-container' key={item.id}>
        <p className='text-lg my-3'>{item.name}</p>
        <div className='image-container'>
          <img src={item.image} alt="King-image" />
        </div>
        <p className='text-sm my-3'>{item.year}</p>

          <div>
            <button className='border-2 px-8 py-1 bg-[#1A8B9C] text-white rounded-lg ' onClick={()=>ShowVoting(item.id)}>Voting</button>
          </div>

          {voting === item.id &&(
              <VotingForm id={item.id} ShowVoting={ShowVoting} ShowCom={ShowCom} />
          )}
    </div>

    ))}

    </div>

    </>
  )
}
