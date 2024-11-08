// /* eslint-disable react-hooks/exhaustive-deps */
import star from '../assets/Star.svg';
import nostar from '../assets/Star_fill.svg';
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

// console.log(data);
  return (
     <>

      {
        data.map((d)=>(
          
     <div key={d.id} className="card-container text-[#FEF7EE] mx-3">
          <div className="image relative">
            {
            d.popular 
            && 
            <span className='flex justify-center items-center left-2 top-2 h-6 px-3 py-1 text-sm font-semibold rounded-3xl text-[#1B1D1F] bg-[#F6C768] absolute'>Popular</span>
            }
          <img className="rounded-lg h-40 w-64" src={d.image} alt="" />

        </div>
      <div className="description flex justify-between items-center mb-2 mt-3">
        <p className=" text-lg font-semibold">{d.name}</p> 
        <span className=" w-12 h-6 p-1 bg-[#BEE3CC] text-[#1B1D1F] text-xs font-bold flex justify-center items-center rounded-md ">{d.price}</span>
      </div>
      <div className="rating mb-14">
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
              {
              
              d.available === false  && (
                <span className="font-bold text-[#ED735D] ml-20">Sold Out</span>
              )
                // d.available == false ?  null : <span className="font-bold text-[#ED735D] ml-20">Sold Out</span>
              
              }
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