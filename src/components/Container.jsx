 import Card from "./Card.jsx";
 import Intro from "./Intro.jsx";
import doodle from '../assets/vector.svg';


function Container() {
  return (
   <>
   <div className="bg-[#1B1D1F] bg-no-repeat static rounded-2xl  px-6 py-16  m-28 md:m-28 lg:m-24 flex flex-col justify-center items-center overflow-x-visible" 
   style={{
    backgroundImage:`url(${doodle})` ,
    backgroundPosition: '49.3vw 15vh',  
    backgroundSize: 'auto',
    backgroundAttachment: 'fixed'
    }}>
   <Intro/>
   <div className="flex flex-wrap justify-evenly py-4 mx-4 lg:mx-20 px-2 lg:px-1 w-full md:w-full lg:w-full ">
   <Card/>
   </div>
   </div>
   </>
  )
}

export default Container

   