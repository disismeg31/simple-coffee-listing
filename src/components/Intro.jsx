import React from 'react';
import doodle from '../assets/vector.svg';

function Intro() {
  return (
     <>
     {/* <div className='w-2/5 text-center  bg-no-repeat static' style={{backgroundImage:`url(${doodle})` ,backgroundPosition: 'right -20px top -30px'}}> */}
     <div className='w-2/5 text-center'>

        <h1 className='text-4xl font-semibold text-[#FEF7EE] m-4'>Our Collection</h1>
        <p className='text-lg text-[#6F757C] '>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div >
            <button className='bg-transparent px-3 py-2 hover:bg-[#6F757C] text-[#FEF7EE] text-base font-semibold rounded-lg mx-4 my-6 ' style={{}}>All Products</button>

            <button className='bg-transparent px-3 py-2 hover:bg-[#6F757C] text-[#FEF7EE] text-base font-semibold rounded-lg mx-4 my-6 ' >Available Now</button>
        </div>
     </div>
     </>
  )
}

export default Intro