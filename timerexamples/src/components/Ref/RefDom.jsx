import React, { useRef } from 'react'

const RefDom = () => {

    const userRef = useRef('');
    const passRef = useRef('');
    let user;

    function handleSubmit(e) {
        e.preventDefault();

         user = userRef.current.value
        const pass = passRef.current.value

        console.log(`User is : ${user} and his pass is ${pass}`);
        
        userRef.current.value = ''
        passRef.current.value = ''
    }






    return (
        <div>
            
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Username</label>
                <input ref={userRef} type="text" />
                <label htmlFor="">Password</label>
                <input ref={passRef} type="text" />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={()=>userRef.current.focus()}>Focus</button>

        </div>
    )
}

export default RefDom