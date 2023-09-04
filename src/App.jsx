import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(()=>{
  //     const span=document.getElementsByTagName("span");
  //     if(count>0){
  //       span[0].style.color="green"}
  //     if(count<0){
  //       span[0].style.color="red"
  //     }
  //     if(count==0){
  //       span[0].style.color="white"
  //     }
  // },[count])

  return (
    <>
      <div class="Main-Container flex items-center gap-5">
        <button className="Decrease-Count text-4xl font-bold  px-7 py-2  bg-red-500 hover:bg-red-400"
        onClick={()=>setCount((prev)=>prev-1)}>-</button>
        <span className={`Count text-5xl ${count === 0 ? 'text-white' : count > 0 ? 'text-green-500' : 'text-red-500'} font-bold`}>{count}</span>
        <button className="Increase-Count text-4xl font-bold  px-7 py-2  bg-green-500 hover:bg-green-400"
        onClick={()=>setCount((prev)=>prev+1)}
        >+</button>
      </div>

    </>
  )
}

export default App
