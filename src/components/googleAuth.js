import React from 'react';
import { connect} from 'react-redux';
import {SignIn , SignOut} from './../actions/index' 

class GoogleAuth extends React.Component{
    state = {isSignedIn : null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId : '343483059298-et8eavu0qg7971v1lji4bosqa63mjdig.apps.googleusercontent.com',
                scope : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.getAuthState(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.getAuthState)
            })
        })
    }
    
    getAuthState = (isSignedIn)=>{
        if(isSignedIn){
           this.props.SignIn(this.auth.currentUser.get().getId());
        }else{
            this.props.SignOut();
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }

    onSignIn = ()=>{
       this.auth.signIn();
    }

    onSignedOut = ()=>{
       this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignedOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        }else{
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign in with google
                </button>
            )
        }

    }
}

const mapStateToProps  = (state)=>{
  return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{SignIn,SignOut})(GoogleAuth);