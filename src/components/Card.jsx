/* eslint-disable react-hooks/exhaustive-deps */
import star from '../assets/star.svg';
import nostar from '../assets/star_fill.svg';
 import {useState,useEffect} from 'react';

function Card() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetchData();
  },[])


const fetchData = () =>{
  fetch(' https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  .then(res => res.json())
  .then(data => setData(data))
}

console.log(data);


  return (
     <>

      {
        data.map((d)=>(
     <div key={d.id} className="card-container text-[#FEF7EE] mx-3">

          <div className="image ">
        <img className="rounded-lg" src={d.image} alt="" />

        </div>
      <div className="description flex justify-between items-center mb-2 mt-3">
        <p className=" text-lg font-semibold">{d.name}</p> 
        <span className=" w-12 h-6 p-1 bg-[#BEE3CC] text-[#1B1D1F] text-xs font-bold flex justify-center items-center rounded-md ">{d.price}</span>
      </div>
      <div className="rating">
          {
            d.rating? 
            <div className='flex items-center'>
              <img className="mx-1" src={nostar} alt="star" />
              <span className="text-[#FEF7EE] font-semibold">{d.rating}</span>
              <span className="mx-1 text-[#6F757C] text-sm font-semibold">({d.votes}votes)</span>
            </div>
             : 
             <div className='flex items-center'>
              <img src={star} alt="nostar" />
              <span className="mx-1 text-[#6F757C] font-semibold">No ratings</span>
             </div>
          }
        </div>
      </div>

        ))
        
      }
      
     </>
  )
}

export default Card