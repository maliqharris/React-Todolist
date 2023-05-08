import React, {useState} from 'react'




// form input: onChange, variable that keeps changing
const Form1 = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)
  const [boxColor, setBoxColor] = useState("")
  const [boxes, makeBoxes] = useState([]);
  const mystyle = {
    backgroundColor: "red",
    height: "20px",
    width: "20px"
    
  }
  const handleSubt = (e) => {
    e.preventDefault();
    const boxPlease = {
        color: boxColor,
        height: "20vh",
        width: "20vh",

    }
    alert("successful submit");
    setIsSubmit(true)
    makeBoxes([...boxes, boxPlease])
    setBoxColor('')
  };
  
  
  return (

   <div>

    {
        isSubmit?
        
       
        <div>Thanks</div>:
       <div></div>
    }

    <form onSubmit={handleSubt}>
       
        <div>
            <label>Firstname: </label>
            <input type="text" name = "first" value={boxColor} onChange={(e)=> setBoxColor(e.target.value)} />
            {
                firstname.length <2?
                <p style={{color: "red"}}>First Name must be at least 2 characters!!!</p>:
                <p></p>
            }
            
        </div>

    
        <div>
            <label>Lastname: </label>
            <input type="text" name = "last" value={lastname} onChange={(e)=> setLastname(e.target.value)} />
            {
                lastname.length <2?
                <p style={{color: "red"}}>Last Name must be at least 2 characters!!!</p>:
                <p></p>
            }
        </div>
    
        <div>
            <label>Email: </label>
            <input type="text" name = "last" value={email} onChange={(e)=> setEmail(e.target.value)} />
            {
                email.length <2?
                <p style={{color: "red"}}>Email must be at least 2 characters!!!</p>:
                <p></p>
            }
        </div>
   
        <div>
            <label>Password: </label>
            <input type="text" name = "last" value={password} onChange={(e)=> setPassword(e.target.value)} />
            {
                password.length <8?
                <p style={{color: "red"}}>Password must be at least 8 characters!!!</p>:
                <p></p>
            }
            {
                password !== confirmpassword ?
                <p style={{color: "red"}}>Passwords must match!!!</p>:
                <p></p>
            }

            
        </div>
        

        <div>
            <label>Confirm Password: </label>
            <input type="text" name = "last" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)} />
        </div>


        <button type="submit">Submit</button>
        <div 
        style={{bacgroundColor: boxColor}}></div> 


    </form>
    <p>Firstname  -   {firstname} </p>
    <p>Lastname  -   {lastname} </p>
    <p>Email  -   {email} </p>
    <p>Password  -   {password} </p>
    <p>Confirm Password  -   {confirmpassword} </p>
   </div>

  )
}

export default Form1