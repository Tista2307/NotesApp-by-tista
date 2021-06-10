import React,{ useState } from "react"
import Head from "./Heading";
import Note from "./Note";
import Foot from "./Footer";
//import notes from "./../notes"
import CreateArea from "./CreateArea";
//var arr=[]
var k=0
function App(){
    const [addnotet,setnotet]=useState("")
    const [addnotep,setnotep]=useState("")
    const [arr,setarr]=useState([])
    function addtitle(event){
        setnotet(event.target.value)
    }
    function addnote(event){
        setnotep(event.target.value)
    }
  function addtoarr(item){
    setarr((prev)=>
    {
       return [...prev,item]
    })
  }
    function addcontents(event){
       var item={
           id:arr.length,
           title:addnotet,
           content:addnotep
       }
       
       addtoarr(item)
       setnotep("")
       setnotet("")
       event.preventDefault();
    }
    function delcontents(id){
        console.log(id)
        setarr(prevnotes=>
            {
           return prevnotes.filter((n,index)=>{
            return prevnotes[index].id !== id;
            })})
       
          
    }
   return <div><Head />
       <CreateArea 
           addtitle={addtitle}
           notet={addnotet}
           addnote={addnote}
           notep={addnotep}
           addcontents={addcontents}
       />
        
        {arr.map((cnote)=>{// cnote is the obj argument
           
            return    (<Note
                title={cnote.title}
                content={cnote.content}
                id={cnote.id}
                key={cnote.id}
               delcontents={delcontents}
                />);
        })}
        
        <Foot />
        </div>
}

export default App;