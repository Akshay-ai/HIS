import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({username : "", password : ""});
    let history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('role')) {
            var role = localStorage.getItem('role');
            if(role === 'admin') history('/adddoctor');
            else history('/recp');
            return;
        }
        else {
            const uname =  localStorage.getItem('username')
            if(uname) history('/doctor');
            return;
        } ;
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({username : credentials.username, password : credentials.password})
        });
        const json = await response.json();
        console.log(json.role);
        if(json.role === 'admin') {
            console.log("I am admin");
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('username', credentials.username);
            localStorage.setItem('role', json.role);
            history('/adddoctor');
            return;
        }
        if(json.role === 'test') {
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('username', credentials.username);
            localStorage.setItem('role', json.role);
            console.log("Entered to recp");
            history('/recp');
            return;
        }
        else if(json.success) {
            console.log("I am doctor");
            localStorage.setItem('role', json.role);
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('username', credentials.username);
            props.showAlert("Successfully Logged in", "success");
            history('/doctor');
            return;
        }
        else {
            props.showAlert("Invalid Details", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    return (

        <div className='container col-4 col-offset-4 my-5' style={{backgroundImage : `url(${require("./image/sethascope.jpg")})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', borderRadius : "10px", height : "65vh" , width : "75vh"}}>
            <form onSubmit={handleSubmit} className='container'>
                <div className="form-group my-3">
                    <label className='mt-3' htmlFor="username">Username</label>
                    <input onChange={onChange} value={credentials.username} type="text" className="form-control my-1" id="username" name='username' aria-describedby="emailHelp" placeholder="Enter Username"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} value={credentials.password} type="password" name='password' className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="my-3 btn btn-primary">Submit</button>
                {/* <Link className='my-1' style={{color : "rebeccapurple", textDecoration: 'none', display : "block"}} to="/forgetpassword">Forget Password ?</Link> */}
            </form>
        </div>
    )
}

export default LoginForm
