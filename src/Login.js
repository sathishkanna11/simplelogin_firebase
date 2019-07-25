import React from "react"
import fire from "./config/fire"


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }

    }

     login=(el)=>{
         el.preventDefault();
         fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
         .catch((error)=>{
             console.log(error)
         })
     }

     signup=(e)=>{
         e.preventDefault();
         fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
         .catch((error)=>{
             console.log(error)
         })
     }

        handleChange=(event)=>{
            this.setState({[event.target.name]:event.target.value})

        }


    render(){
        return<div>
            <form>
                <div>
                <label>Email </label>
                <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                placeholder="enter email">
                </input>
                </div>
                <div>
                    <label>Password</label>
                <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    placeholder="enter password">
                  </input>
                </div>
                <button type="submit" onClick={this.login}>Login</button>
                <button style={{marginLeft:"25px"}} onClick={this.signup}>Signup</button>
            </form>
        </div>
    }
}

export default Login;