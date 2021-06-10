import React from "react";

function CreateArea(props) {
    
  return (
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={props.addtitle}  value={props.notet}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.addnote}  value={props.notep}/>
        <button type="submit" onClick={props.addcontents}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
