import React from "react"
import Login from "./Login"
import fire from "./config/fire"
import Home from "./Home"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{}
        }
        
    }


    componentDidMount=()=>{
        this.authListener();
    }

    authListener=()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
            else{
                this.setState({user: null })
            }
        })

    }
    render(){
        return<div>
            {this.state.user ? (<Home/>) : (<Login/>) }
        </div>
    }

}

export default App