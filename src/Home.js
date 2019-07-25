import React from "react"
import fire from "./config/fire"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    logout=(e)=>{
        e.preventDefault();
        fire.auth().signOut();
    }
    render(){
        return<div>
            <h1>Welcome Home</h1>
            <button onClick={this.logout}>Log Out Me</button>
        </div>
    }
}

export default Home;