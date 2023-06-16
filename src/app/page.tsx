
"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
const [data,setData]=useState<string>("")
const [message,setMessage]=useState<string>('')
const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
// console.log(data)
const res=await axios.post("http://localhost:3000/api/gpt",{
  msg:data
})
setMessage(res.data.message)
// console.log()

}
return (
  <>
  <h1>Home route</h1>
  <div>
  {message}
  </div>
  <form className="form" onSubmit={onSubmit}>
      <input type="text" name="input-text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setData(e.target.value)}/>
      <button type="submit">Submit</button>
  </form>
  
  
  </>
)
};

export default Home;
//server component
//
//client