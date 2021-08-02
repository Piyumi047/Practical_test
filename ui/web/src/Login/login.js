import React, {Component} from 'react';
import {PostData} from '../services/Postdata';

class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  

  login() {
    if(this.state.username && this.state.password){
      PostData('login',this.state).then((result) => {
       let responseJson = result;
       if(responseJson.userData){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
       }
       
      });
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }
  render() {
     return (
      <div className="Container" id="Body">
        <div className="Login">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default Login;


