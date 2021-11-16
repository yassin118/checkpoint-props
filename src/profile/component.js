import React from "react"

const Component=props=>{
const AlertMyInput = name => alert(name);
const styleObject = { color : "red" , textAlign: 'center'}
 return(
    <div style={styleObject} >
     <h1 className="Full name" >  Full name : Yassin Hafi </h1> 
     <h1 className="Bio" >  Bio :  ...  </h1> 
     <h1 className="Profession" >  Profession : Etudiant   </h1>
     <h1 className="profilephoto" >  Profile photo :  </h1> 
     < img width="620" height="340"  src="/enfant.jpg" />
 

 <button onClick={() => props.alertMyInput(`My name is Yassin Hafi `)}>
     ClickMe
   </button>
   
   
    </div>
 )
    
}
export default Component