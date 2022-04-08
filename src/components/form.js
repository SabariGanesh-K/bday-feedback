import React ,{useState} from 'react';
import { Control, LocalForm, Errors } from "react-redux-form";
import { db } from '../firebase';
import './form.css'

const FeedbackForm = () =>{
    const Loader =( 

        <div className = "flex justify-center items-center py-3 ">
        <div className = "animate-spin rounded-full h-16 w-16 border-b-2 border-red-700"></div>
       
    </div>)
    
    const handlesubmit = () =>{
      setsubmitstatus(true)
      db.collection('wishes').add({
        dislikes:dislike,
        likes:like,
        name:name
      }).then(()=>{
        setstatus("hidden");
      }).catch(()=>{
        seterror(true);
        setsubmitstatus(false)
      })
    }
    const [name,setname] = useState("");
    const [like,setlikes] = useState("");
    const [dislike,setdislike] = useState("");
    const [submitstatus,setsubmitstatus] = useState(false)
    const [error,seterror] = useState(false)
      const [status,setstatus] = useState("")
    const required = (val) => val && val.length;
    return(
      <>
      {error && <div className='bg-red-800 text-white font-semibold text-center'>Error submitting response. Try again Later :)</div> }
        <div className={`formcard m-5 rounded-full ${status} `}>
        <div className='flex flex-col text-center '>
<LocalForm>
    <div className='text-black font-bold mt-10'>Your Name (optional)</div>
<Control.text model=".name"
            onChange = {(e)=>setname(e.target.value)}
            id="name"
            name="name"
            className="bg-gray-300 w-3/6 "
          
          />
  

<div className='text-black font-bold mt-10'>What qualities of mine  deserve appreciation  ?? 😄</div>
<Control.textarea model = ".likes" id = "likes"  onChange = {(e)=>setlikes(e.target.value)} className = "bg-gray-300 w-4/6 "  validators={{
              required,
          
            }}/>
<Errors
            className="text-red-800 font-semibold"
            model=".likes"

            show="touched"
            messages={{
              required: "Required!",
            }}
          />


<div className='text-black font-bold mt-10 '>What qualities of mine deserve a TIGHT SLAP  ?? 🙂</div>
<Control.textarea model = ".dislikes" id = "dislikes"  onChange = {(e)=>setdislike(e.target.value)} className = "bg-gray-300 w-4/6 "  validators={{
              required,
             
            }}/>
<Errors
            className="text-red-800 font-semibold "
            model=".dislikes"

            show="touched"
            messages={{
              required: "Required!",
              minLength: "Description must be atleast 25 characters..",
              maxLength: "Description must be less than 100 characters",
            }}
          />


<div className='flex flex-row justify-evenly'>
{(like==="" || dislike==="") && <button className='font-semibold text-3xl text-gray-500 bg-gray-400 p-2 m-6 rounded-full cursor-default'>SUBMIT</button>}
{ like!=="" && dislike!=="" && !submitstatus && <button className='font-semibold text-3xl text-white bg-black p-2 m-6 rounded-full ' onClick={handlesubmit}>SUBMIT</button>}
{ submitstatus && Loader }

</div>

</LocalForm>
        </div>


        </div>
        {status && <div className='bg-green-600 font-semibold text-center'>Response submitted !! Thank you so  much 😉😃</div> }
       
        </>
    )
}

export default FeedbackForm;