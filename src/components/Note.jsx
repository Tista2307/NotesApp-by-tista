import React from "react"

function note(props){
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.id}</p>
        <button type="submit" onClick={() => {
        props.delcontents(props.id);
      }}>Done</button>
    </div>
}
export default note;