import React from "react"
function foot(){
    var year=new Date()
    var cy=year.getFullYear()
    return <footer>
        
        <p>© Copyright {cy}</p>
    </footer>
}
export default foot;