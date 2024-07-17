import React from 'react'
import {useState } from 'react'
export default function Formparticipant({isForm ,ShowForm}) {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('King');

  const handleSubmit = async (e) => {
   

    const newParticipant = {
      name,
      image,
      year,
      category
    };

    const response = await fetch('http://localhost:8080/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParticipant),
    });

    if (response.ok) {
      const result = await response.json();
   
     
      setName('');
      setImage('');
      setYear('');
    } 
  }
  return (
    <>
    <div className='fixed bg-[#1A8B9C] rounded-lg  inset-x-[420px] h-[200px]'>
        <div className='mx-4 flex justify-between items-center'>
          <h3 className='text-center text-white font-xl py-3'>Create Participant</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white cursor-pointer" onClick={ShowForm}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </div>


<form onSubmit={handleSubmit}>
          <div className='flex justify-evenly'>
            <input type="text" placeholder='Enter participant name'  value={name} 
          onChange={(e) => setName(e.target.value)}/>

              <input type="text" placeholder='Enter img url address'  value={image} 
          onChange={(e) => setImage(e.target.value)}/>
          </div>

          <div className='flex justify-around my-6'>
            <input type="text" placeholder='Enter Year' className='-mx-4'  value={year}
            onChange={(e) => setYear(e.target.value)}/>

            <select   value={category} 
            onChange={(e) => setCategory(e.target.value)}>
              <option value='King'>King</option>
              <option value='Queen'>Queen</option>
            </select>
          </div>



            <div className='text-white  flex justify-center items-center h-10'>
              <button className='rounded-lg  border-2 px-3 py-1 cursor-pointer'>Create</button>
            </div>

    </form>
    </div>

    </>
  )
}
