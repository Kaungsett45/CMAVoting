
import React from 'react'
import { useEffect , useState} from 'react';
import '../App.css'


export default function Topparticipant() {
  const [data, setData] = useState([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:8080/top');
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
  
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data ', error);
         
        }
      };
  
      fetchData();
    }, []);
       
  return (
  
   <>
    <div >
      {data ? (
        <div className='flex justify-around'>
          <div>
          <h2>Top King:</h2>
          <p>{data.king ? data.king.name : 'No King Data'}</p>
          <div className='image-container'>
            <p>{data.king ? <img src={ data.king.image} alt="" /> : 'No King Data'}</p>
          </div>
          <p>Vote count 👍{data.king ? data.king.vote : 'No King Data'}</p>
       
          </div>
          <div>
          <h2>Top Queen:</h2>
          <p>{data.queen ? data.queen.name : 'No Queen Data'}</p>
          <div className='image-container'>
            <p>{data.queen ? <img src={ data.queen.image} alt="" /> : 'No King Data'}</p>
          </div>
          <p>Vote count 👍{data.queen ? data.queen.vote : 'No King Data'}</p>
       
         
          </div>
         
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>

    
    
   </>

  )
}
