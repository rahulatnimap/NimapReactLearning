import React, { useState } from 'react'

const FormValidation = () => {

    // const [mail, setMail] = useState("");
    // const [password, setPassword] = useState("");
    const [details, setDetails] = useState({ name : "",email: "", pass: "" });
    const [user, setUser] = useState([]);
    const [mouse , setMouse] = useState(false);
     
   const [error , setError] = useState('')
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
     const validPass = new RegExp(
        '^[a-zA-Z0-9._:$!%-]'
     );

     const validate = (e) => {
        e.preventDefault()

        if (!validEmail.test(details.email)) {
            alert("Invalid Mail")
        }
        if (!validPass.test(details.pass)) {
            alert("Invalid Pass")
        }
     };

    function handleSumit(e) {
        e.preventDefault()
      setUser((prevuser)=> [...prevuser , details]);
    }

    function handleSubmitcolor(e){
         setMouse(true)  
    }
    function handleSubmitcolorout(e){
        setMouse(false)  
   }

    console.log(user);

    const buttonColor = mouse ? 'red' : 'white'


    return (
        <div>
            <form action="" onSubmit={handleSumit}>
            <span>Name : <input type="text" onChange={(e) => setDetails({...details , name :  e.target.value})} /></span>
                <span>Email : <input type="email" onChange={(e) => setDetails({...details , email :  e.target.value})} /></span>
                <span>Password : <input type="password" onChange={(e) => setDetails({...details, pass :  e.target.value})} /></span>
                <button onClick={validate}>Validate</button>
                <button style={{ backgroundColor : buttonColor}} onMouseLeave={handleSubmitcolorout} onMouseEnter={handleSubmitcolor} type='submit'>Submit</button>
            </form>

            

            <div>{user.map((users , index)=>(
                    <li key={index}>Name : {users.name}  Email:-{users.email}</li>
            ))}</div>

            
        </div>
    )
}

export default FormValidation