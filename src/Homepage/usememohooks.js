import { useMemo, useState } from "react";

const Testing = () => {
   const[count,setCount]= useState(0);
   const [notes,setNotes]=useState([])
   const printableValue=useMemo(()=>CountingValues(count),[count])
   

//   const memoised = useMemo();
  function CountingValues(num) {
    console.log("running");
    for (let i = 0; i < 10000000; i++) {
        num=num+1;
    }
    return num;
  }
  const incremntValueHandler=()=>{
      setCount(count+1);
  }
  const decremntValueHandler=()=>{
    setCount(count-1);
  }
  const addNoteHandler=()=>{
    setNotes(prev=>[...prev,"i am added"])
  }
  return (
    <div>
{notes}
      <div><button onClick={addNoteHandler}>Add notes</button></div>
      counting values : {count}<div>
<button onClick={incremntValueHandler}>increment</button>
<button onClick={decremntValueHandler}>decrement</button>
{printableValue}
      </div>
    </div>
  );
};
export default Testing;
