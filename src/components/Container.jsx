 import Card from "./Card.jsx";
 import Intro from "./Intro.jsx";
import doodle from '../assets/vector.svg';


function Container() {
  return (
   <>
   <div className="bg-[#1B1D1F] bg-no-repeat static rounded-lg  m-auto p-14 w-2/2 flex flex-col justify-center items-center overflow-x-visible" 
   style={{
    backgroundImage:`url(${doodle})` ,
    backgroundPosition: '62% 9%', // Use percentages for responsive positioning,
    // backgroundPosition: 'right 395px top 7px', 
    // backgroundAttachment: 'fixed',  // Keeps it fixed on the screen
    backgroundSize: 'auto'
    }}>

   {/* style={{backgroundImage:`url(${doodle})` ,backgroundPosition: 'right -20px top -30px'}} */}
   <Intro/>
   <Card/>
   </div>
   </>
  )
}

export default Container

   {/* <div className=" w-2/2 bg-[#1B1D1F] rounded-lg absolute inset-[200px] m-auto p-20 flex justify-center"> */}
