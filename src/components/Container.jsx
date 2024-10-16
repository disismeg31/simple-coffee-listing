 import Card from "./Card.jsx";
 import Intro from "./Intro.jsx";
import doodle from '../assets/vector.svg';


function Container() {
  return (
   <>
   <div className="bg-[#1B1D1F] bg-no-repeat static rounded-lg  p-20 m-40  flex flex-col justify-center items-center overflow-x-visible" 
   style={{
    backgroundImage:`url(${doodle})` ,
    backgroundPosition: '62% 9%', // Use percentages for responsive positioning,
    backgroundSize: 'auto'
    }}>
   <Intro/>
   <div className="flex  px-20 py-4 flex-wrap justify-evenly   ">
   <Card/>
   </div>
   </div>
   </>
  )
}

export default Container

   {/* <div className=" w-2/2 bg-[#1B1D1F] rounded-lg absolute inset-[200px] m-auto p-20 flex justify-center"> */}
