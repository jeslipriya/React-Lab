import React, { useState } from 'react'

function Forms() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[number, setNumber] = useState("");
    const[password, setPassword] = useState("");
    const[submittedData, setSubmittedDate] = useState(null);
    const [showSubmittedPassword, setShowSubmittedPassword] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = {name, email, number, password}

        setSubmittedDate(formData);
        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
    }
   
   
    return (
        <div>
            <h1>Forms</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text" id="name" placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /> <br /> <br />

                <input
                    type="email" id="email" placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /> <br /> <br />

                <input type="number" id="num" placeholder='Enter your phone number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                /> <br /> <br />

                <input type="password" id="pass" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> <br /> <br />

           
                <button type='submit'>Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h1>Submitted Data</h1> <br />
                    <p><strong>Name : </strong> {submittedData.name} </p>
                    <p><strong>Email : </strong> {submittedData.email} </p>
                    <p><strong>Number : </strong> {submittedData.number} </p>
                    <p><strong>Password : </strong>
                        {showSubmittedPassword
                            ? submittedData.password
                            : "*".repeat(submittedData.password.length)}
                    </p>

                    <button onClick={() => setShowSubmittedPassword(!showSubmittedPassword)}>
                            {showSubmittedPassword ? "Hide Password" : "Show Password"}
                    </button>

                </div>
            )}

        </div>
    )
}

export default Forms;
