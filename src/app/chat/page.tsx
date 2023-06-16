

const Chat = () => {
    const onSubmit=async(formData:FormData)=>{
        'use server'
        const value=formData.get('input-text')
        const body={
            msg:value
        }
       const res=await fetch('http://localhost:3000/api/gpt',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        })
        const text=await res.json()
        console.log(text)
    }
  return (
    <>
    <form action={onSubmit} className="form">
        <input type="text" name="input-text"/>
        <button type="submit">Submit</button>
    </form>
    
    
    </>
  )
};

export default Chat;
//server component
//
//client